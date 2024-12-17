import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { HashLoader } from 'react-spinners';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
  }, [user]);

  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(db, "Users", user)).then((data) => {
        console.log(data.data());

        setUserData(data.data());
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Dashboard</h1>
      {
        userData ?<div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Name: <span className="font-normal text-gray-500">{userData.name}</span></h1>
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Age: <span className="font-normal text-gray-500">{userData.age}</span></h1>
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Email: <span className="font-normal text-gray-500">{userData.email}</span></h1>
        <h1 className="text-xl font-semibold text-gray-700">City: <span className="font-normal text-gray-500">{userData.city}</span></h1>
      </div> :<div className='flex justify-center items-center'>
      <HashLoader />
      </div>
      }
    </div>
  )
}
