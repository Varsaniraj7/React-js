import React,{useEffect,useState} from 'react'

export default function UseEffectEx() {
    const [num,setNum] = useState(0);
    useEffect(()=>{
        console.log("mounting");
    },[])
    useEffect(()=>{
        console.log("updating");
    },[num])
    return (
        <div>
            <h1>UseEffectEx</h1>
            <h1>{num}</h1>
            <button onClick={()=>setNum(num-1)}>-</button>
            <button onClick={()=>setNum(0)}>Reset</button>
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
    )
}
