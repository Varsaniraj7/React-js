import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { HashLoader } from 'react-spinners';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();

  const [name, setName] = useState("");
  const [sub, setSub] = useState("");

  const [editIndex,setEditIndex] = useState(null);

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
      let details = data.docs.map((item) => ({
        docId: item.id,
        ...item.data(),
      }));
      setRecord(details);
    })
  }

  const handleAdd = async () => {
    if(editIndex == null){
      await addDoc(collection(db, "data"), { name, sub, userId: user });
    }else{
      await updateDoc(doc(db,"data",editIndex),{
        name,
        sub,
        userId:user,
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
    let singleData = record.find((item)=> item.docId == id);
    setName(singleData.name);
    setSub(singleData.sub);
    setEditIndex(id);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Dashboard</h1>

        {/* User Info */}
        {
          userData ? (
            <div className="bg-gray-800 rounded-lg shadow-md p-6 max-w-md mx-auto">
              <h1 className="text-xl font-semibold text-gray-300 mb-4">
                Name: <span className="font-normal text-gray-400">{userData.name}</span>
              </h1>
              <h1 className="text-xl font-semibold text-gray-300 mb-4">
                Age: <span className="font-normal text-gray-400">{userData.age}</span>
              </h1>
              <h1 className="text-xl font-semibold text-gray-300 mb-4">
                Email: <span className="font-normal text-gray-400">{userData.email}</span>
              </h1>
              <h1 className="text-xl font-semibold text-gray-300">
                City: <span className="font-normal text-gray-400">{userData.city}</span>
              </h1>
            </div>
          ) : (
            <div className="flex justify-center items-center h-32">
              <HashLoader color="#4F46E5" />
            </div>
          )
        }

        {/* Input Form */}
        <div className="bg-gray-800 p-6 mt-8 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Add New Record</h2>
          <input
            type="text"
            placeholder='Enter Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder='Enter Your Subject'
            value={sub}
            onChange={(e) => setSub(e.target.value)}
            className="w-full p-2 mb-4 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            {editIndex ? "Update Data" : "Add Data"}
          </button>
        </div>

        {/* Records List */}
        <div className="mt-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Records</h2>
          {
            record && record.map((e, i) => (
              <ul
                key={i}
                className="bg-gray-800 p-4 mb-4 rounded-lg shadow-md text-gray-200"
              >
                <li><strong>UserId:</strong> {e.userId}</li>
                <li><strong>DocId:</strong> {e.docId}</li>
                <li><strong>Name:</strong> {e.name}</li>
                <li><strong>Subject:</strong> {e.sub}</li>
                <li>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    onClick={() => handleEdit(e.docId)}
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    onClick={() => handleDelete(e.docId)}
                  >
                    Delete
                  </button>
                </li>
              </ul>

            ))
          }
        </div>
      </div>
    </>
  );
}
