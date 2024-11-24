import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
    const data = useLocation();
  return (
    <div>
        <h1>Contact</h1>
        <h3>{data?.state?.name}</h3>
        <h3>{data?.state?.subject}</h3>
        <h3>{data?.state?.city}</h3>
    </div>
  )
}
