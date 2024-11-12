import React from 'react'

export default function LocalSessionIntro() {
    localStorage.setItem("student","Raj")
    sessionStorage.setItem("student","Raj")
  return (
    <>
    <h1>Local Session Intro</h1>
    </>
  )
}
