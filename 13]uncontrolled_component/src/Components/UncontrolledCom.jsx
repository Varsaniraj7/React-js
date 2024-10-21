import React, { useRef, useState } from 'react'

export default function UncontrolledCom() {
    const [data,setData] = useState([]);
    const nameRef = useRef();
    const cityRef = useRef();
    const subRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const city = cityRef.current.value;
        const subject = subRef.current.value;
        setData([...data,{name,city,subject}])
    }
    return (
        <div>
            <h1>UncontrolledCom</h1>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <input type="text" placeholder='Enter Your Name' ref={nameRef} />
                <input type="text" placeholder='Enter Your City' ref={cityRef} />
                <input type="text" placeholder='Enter Your Subject' ref={subRef} />
                <button type="submit">Submit</button>
            </form>
            {
                data ? 
                data.map((e,i)=>{
                    return <div key={i} className='table-container' >
                        <table className='table' border={1}  >
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>City</th>
                                <th>Subject</th>
                            </tr>
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.city}</td>
                                <td>{e.subject}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                }) :
                <h1>Loading</h1>
            }
        </div>
    )
}
