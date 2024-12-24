import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { HashLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();

  const [name, setName] = useState("");
  const [sub, setSub] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const [record, setRecord] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [user]);

  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(db, "Users", user)).then((data) => {
        console.log(data.data());
        setUserData(data.data());
      });
    }
  };

  const fetchData = async () => {
    await getDocs(collection(db, "data")).then((data) => {
      let sameData = data.docs.filter((item) => item.data().userId == user)
      console.log(sameData);

      let details = sameData.map((item) => ({
        docId: item.id,
        ...item.data(),
      }));
      setRecord(details);
    })
  }

  const handleAdd = async () => {
    if (editIndex == null) {
      await addDoc(collection(db, "data"), { name, sub, userId: user });
    } else {
      await updateDoc(doc(db, "data", editIndex), {
        name,
        sub,
        userId: user,
      })
    }
    setName("");
    setSub("");
    fetchData();
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "data", id))
      .then((data) => {
        let remainingRecord = record.filter((item) => item.docId != id);
        setRecord(remainingRecord)
      })
  }

  const handleEdit = async (id) => {
    let singleData = record.find((item) => item.docId == id);
    setName(singleData.name);
    setSub(singleData.sub);
    setEditIndex(id);
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/", { replace: true })
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-200 p-6">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Dashboard</h1>

        {/* User Info */}
        {userData ? (
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <img
              className="w-14 h-14 object-cover rounded-full mx-auto mb-4"
              src={userData.imgUrl}
              alt="User profile"
            />
            <h1 className="text-xl font-semibold text-gray-300 mb-2">
              Name: <span className="font-normal text-gray-400">{userData.name}</span>
            </h1>
            <h1 className="text-xl font-semibold text-gray-300 mb-2">
              Age: <span className="font-normal text-gray-400">{userData.age}</span>
            </h1>
            <h1 className="text-xl font-semibold text-gray-300 mb-2">
              Email: <span className="font-normal text-gray-400">{userData.email}</span>
            </h1>
            <h1 className="text-xl font-semibold text-gray-300">
              City: <span className="font-normal text-gray-400">{userData.city}</span>
            </h1>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 mt-6 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center h-32">
            <HashLoader color="#4F46E5" />
          </div>
        )}


        {/* Input Form */}
        <div className="bg-gray-800 p-6 mt-8 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Add New Record</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Your Subject"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {editIndex ? "Update Data" : "Add Data"}
          </button>
        </div>

        {/* Records List */}
        <div className="mt-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Records</h2>
          {record && record.map((e, i) => (
            <ul
              key={i}
              className="bg-gray-800 p-4 mb-4 rounded-lg shadow-md text-gray-200"
            >
              <li className="mb-2"><strong>UserId:</strong> {e.userId}</li>
              <li className="mb-2"><strong>DocId:</strong> {e.docId}</li>
              <li className="mb-2"><strong>Name:</strong> {e.name}</li>
              <li className="mb-2"><strong>Subject:</strong> {e.sub}</li>
              <div className="flex gap-4 mt-2">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300"
                  onClick={() => handleEdit(e.docId)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-300"
                  onClick={() => handleDelete(e.docId)}
                >
                  Delete
                </button>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
