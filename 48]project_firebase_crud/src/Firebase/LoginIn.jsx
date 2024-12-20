import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { TextField } from '@mui/material';

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    let user = await signInWithEmailAndPassword(auth, email, password).then(
      (data) => {
        navigate("/dashboard", { replace: true });
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="bg-gray-800 p-6 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <div className="space-y-4">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="w-full"
            InputLabelProps={{ style: { color: '#9CA3AF' } }}
            InputProps={{
              style: { color: '#E5E7EB', backgroundColor: '#374151' },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            className="w-full"
            InputLabelProps={{ style: { color: '#9CA3AF' } }}
            InputProps={{
              style: { color: '#E5E7EB', backgroundColor: '#374151' },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </div>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-400">
            Don't have an account?{" "}
          </span>
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
