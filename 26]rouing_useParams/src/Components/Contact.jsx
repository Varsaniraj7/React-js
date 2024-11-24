import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {
    const data = useParams();
  return (
    <div>
        <h1>Contact</h1>
        <h3>{data.name}</h3>
    </div>
  )
}
