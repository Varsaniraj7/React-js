import React, { useRef, useState } from 'react';

export default function ControlledCom() {
    const [name, setName] = useState('');
    const [sub, setSub] = useState('');
    const [city, setCity] = useState('');
    
    const [data, setData] = useState([]);

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name != "" && sub != "" && city != "") {
            const obj = { name, sub, city };
            console.log(obj);
            setData([...data, obj]);
            setName("");
            setSub("");
            setCity("");

            inputRef.current.focus();
        } else {
            alert("Add")
        }
    }
    
    return (
        <>
            <div>
                <h1>ControlledCom</h1>
            </div>
            <div>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} ref={inputRef} />
                    <input type="text" placeholder='Enter Subject' value={sub} onChange={(e) => setSub(e.target.value)} />
                    <input type="text" placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <table border={1} bgcolor='red' width='90%'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>City</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) => (
                            <tr key={i}>
                                <td>{e.name}</td>
                                <td>{e.sub}</td>
                                <td>{e.city}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
