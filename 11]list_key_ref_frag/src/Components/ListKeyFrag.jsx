import React from 'react'
import { useState } from 'react'

export default function ListKeyFrag() {
    const[data,setData]=useState([
        {name:"abc",subject:"react"},
        {name:"def",subject:"js"},
        {name:"pqr",subject:"html"},
        {name:"xyz",subject:"css"}
    ])
    return (
        <div>
            <h1>List Key Fragment</h1>
            {
                data ? 
                    data.map((e,i)=>{
                        return <div key={i}>
                                <h2>{e.name} : {e.subject}</h2>
                            </div>
                    }) :
                    <p>Loading</p>
            }
        </div>
    )
}
