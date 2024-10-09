import React, { useState } from 'react'

export default function UseStateEx() {
    const [count,setCount] = useState(0);
    
    const increment = ()=>{
        setCount(count+1)
    }
    
    const reset = ()=>{
        setCount(0)
    }

    const decrement = ()=>{
        setCount(count-1)
    }

    return (
        <div>
            <h1>Hooks UseState</h1>
            <h1>{count}</h1>
            <button onClick={decrement} >-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment} >+</button>
        </div>
    )
}
