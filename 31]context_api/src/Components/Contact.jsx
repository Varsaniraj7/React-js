import React, { useContext } from 'react'
import { myContext } from './Home'

export default function Contact() {
    const data = useContext(myContext)
  return (
    <div>
        <h1>Contact</h1>
        <ul>
            <li><h2>{data}</h2></li>
        </ul>
    </div>
  )
}
