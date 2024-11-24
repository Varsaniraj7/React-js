import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} ></Route>
          <Route path='/about' Component={About} ></Route>
          <Route path='/contact' Component={Contact} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
