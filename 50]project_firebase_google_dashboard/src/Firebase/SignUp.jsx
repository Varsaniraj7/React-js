import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db, provider } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { TextField } from '@mui/material';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = async () => {
        let user = await createUserWithEmailAndPassword(auth, email, password).then((data) => {
            setDoc(doc(db, "Users", data.user.uid), {
                name, city, age, email,imgUrl:"/user.jpg",
            });
            navigate("/");
        });
    };

    const handleGoogleSignIn = async () => {
        await signInWithPopup(auth, provider).then(data => {
            // console.log(data);
            setDoc(doc(db, "Users", data.user.uid), {
                name: data.user.displayName, 
                city:"Rajkot",
                email: data.user.email,
                age:19,
                imgUrl:data.user.photoURL,
            })
            navigate("/dashboard");
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
            <div className="bg-gray-800 p-6 rounded shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
                <div className="space-y-4">
                    <TextField
                        id="outlined-basic"
                        label="Enter Your Name"
                        variant="outlined"
                        className="w-full"
                        InputLabelProps={{ style: { color: '#9CA3AF' } }}
                        InputProps={{
                            style: { color: '#E5E7EB', backgroundColor: '#374151' },
                        }}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Enter Your Email"
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
                        label="Enter Your Age"
                        variant="outlined"
                        className="w-full"
                        InputLabelProps={{ style: { color: '#9CA3AF' } }}
                        InputProps={{
                            style: { color: '#E5E7EB', backgroundColor: '#374151' },
                        }}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Enter Your City"
                        variant="outlined"
                        className="w-full"
                        InputLabelProps={{ style: { color: '#9CA3AF' } }}
                        InputProps={{
                            style: { color: '#E5E7EB', backgroundColor: '#374151' },
                        }}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Enter Your Password"
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
                        onClick={handleSignup}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Sign Up
                    </button>
                </div>
                <div className="text-center mt-4">
                    <span className="text-sm text-gray-400">
                        Already have an account?{" "}
                    </span>
                    <Link to="/" className="text-blue-400 hover:underline">
                        Sign In
                    </Link>
                    {/* <Link to="/dashboard" className="text-blue-400 hover:underline"> */}
                    <button onClick={handleGoogleSignIn} >Sign In With Google</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}
