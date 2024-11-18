import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Routing/Home'
import About from './Components/Routing/About'
import Contact from './Components/Routing/Contact'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
