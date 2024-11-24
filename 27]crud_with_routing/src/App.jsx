import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './CrudWithRouting/Read'
import Create from './CrudWithRouting/Create'
import Delete from './CrudWithRouting/Delete'
import Update from './CrudWithRouting/Update'

export default function App() {
  const [record, setRecord] = useState([
    { id: 1, name: "sumit", subject: "react" },
    { id: 2, name: "raj", subject: "node" },
    { id: 3, name: "ajay", subject: "express" },
  ])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Read data={record} />} ></Route>
          <Route path='/create' element={<Create data={record} setData={setRecord} />} ></Route>
          <Route path='/delete' element={<Delete data={record} setData={setRecord} />} ></Route>
          <Route path='/update' element={<Update data={record} setData={setRecord} />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
