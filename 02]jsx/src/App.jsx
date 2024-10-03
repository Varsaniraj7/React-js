import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='main'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">Login</a>
        </div>
        <div className='img-section'>
          <img src={reactLogo} alt="" srcset="" />
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
