import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create({data,setData}) {
    const [name, setName] = useState();
    const [subject, setSubject] = useState();
    const navigate = useNavigate();
    const handleAdd = () => {
        setData([...data,{id:data.length+1,name,subject}]);
        navigate("/",{replace:true});
    }
    return (
        <div>
            <h1>Create</h1>
            <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter Your Subject' onChange={(e) => setSubject(e.target.value)} />
            <button onClick={handleAdd} >Add</button>
        </div>
    )
}
