import React from 'react'
import '../App.css'
import logo from '../assets/react.svg'

export default function Navbar() {
  return (
    <div className='container-navbar'>
        <div className="navimg">
            <img src={logo} alt="" srcset="" />
        </div>
        <div className="navlink">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallary</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        </div>
    </div>
  )
}
