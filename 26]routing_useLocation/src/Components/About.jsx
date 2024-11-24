import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  let obj = {
    name: "Raj",
    subject: "React",
    city: "Rajkot"
  }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/contact",{replace:true,state:obj})
    }
  return (
    <div>
        <h1>About</h1>
        <button onClick={handleClick} >Go to Contact</button>
    </div>
  )
}
