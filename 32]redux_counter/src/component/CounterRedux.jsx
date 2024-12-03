import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/Slice';

export default function CounterRedux() {
    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.CounterKey.count;
    })
    return (
        <div>
            <h1>CounterRedux</h1>
            <h2>{data}</h2>
            <button onClick={()=>dispatch(increment())} >+</button>
            <button onClick={()=>dispatch(decrement())} >-</button>
            <button onClick={()=>dispatch(reset())} >Reset</button>
        </div>
    )
}
