import React from 'react'
import About from './About'
import { createContext } from 'react'
import Contact from './Contact';

export const myContext = createContext();

export default function Home() {
    const data = "Raj"
    return (
        <div>
            <h1>Home</h1>
            <myContext.Provider value={data} >
                <About/>
                <Contact/>
            </myContext.Provider>
        </div>
    )
}
