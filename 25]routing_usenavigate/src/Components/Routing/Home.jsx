import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to={"/about"} >Home About Page</Link>
        <Link to={"/contact"} >Home Contact Page</Link>
    </div>
  )
}
