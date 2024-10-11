import React,{useEffect,useState} from 'react'

export default function Counter() {
  const [num,setNum] = useState(0);
  return (
    <div className='main'>
      <h1>Counter</h1>
      <h1>{num}</h1>
      <div className='btn'>
        <button onClick={()=>setNum(num-1)} >-</button>
        <button onClick={()=>setNum(0)} >Reset</button>
        <button onClick={()=>setNum(num+1)} >+</button>
      </div>
    </div>
  )
}