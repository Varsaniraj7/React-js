import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

export default function LogIn() {
  const[email,setEmail]= useState("");
  const[password,setPassword]= useState("");
  const navigate = useNavigate();
  const handleLogin = async ()=>{
    let user = await signInWithEmailAndPassword(auth,email,password).then(
      (data)=>{
        navigate("/dashboard",{replace:true})
      }
    )
  };
  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </div>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Don't have an account?{" "}
          </span>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
