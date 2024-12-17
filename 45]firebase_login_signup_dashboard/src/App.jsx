import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Firebase/SignUp'
import LogIn from './Firebase/LogIn'
import Dashboard from './Firebase/Dashboard'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={LogIn} ></Route>
        <Route path='/signup' Component={SignUp} ></Route>
        <Route path='/dashboard' Component={Dashboard} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
