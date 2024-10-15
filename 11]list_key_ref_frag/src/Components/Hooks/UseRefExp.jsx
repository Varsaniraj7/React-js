import React from 'react'
import { useRef } from 'react'

export default function UseRefExp() {
    const inputRef = useRef();
    const handleClick = () => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 2000);
    }   
    // console.log(inputRef.current.value); 
    return (
        <div>
            <h1>UseRefExp</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
