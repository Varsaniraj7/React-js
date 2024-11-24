import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/contact",{replace:true})
    }
  return (
    <div>
        <h1>About</h1>
        <button onClick={handleClick} >Go to Contact</button>
    </div>
  )
}
