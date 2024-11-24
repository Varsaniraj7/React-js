import React from 'react'
import {Link} from 'react-router-dom'
 
export default function Home() {
    const name = "Raj";
  return (
    <div>
        <h1>Home</h1>
        <Link to={'/about'} >About</Link>
        <Link to={`/contact/${name}`} >Contact</Link>
    </div>
  )
}
