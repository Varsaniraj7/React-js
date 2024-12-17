import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup = async () => {
        let user = await createUserWithEmailAndPassword(auth, email, password).then((data) => {
            console.log(user);
        })
    }
    return (
        <div>
            <h1>SignUp</h1>
            <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter Your Age' onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup} >Sign Up</button>
        </div>
    )
}
