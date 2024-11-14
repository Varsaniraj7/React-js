import React, { useEffect, useState } from 'react';

export default function CrudLocal() {
    const [name, setName] = useState("");
    const [sub, setSub] = useState("");
    const [city, setCity] = useState("");

    const [editIndex,setEditIndex]=useState(null)

    const [record, setRecord] = useState([]);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Students")) || [];
        setRecord(data);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(editIndex == null){
            let obj = { id: Date.now(), name, sub, city };
        setRecord([...record, obj]);
        localStorage.setItem("Students", JSON.stringify([...record, obj]));
        }else{
            let singleData = record.find((item)=>item.id == editIndex)
            singleData.id = editIndex;
            singleData.name = name;
            singleData.sub = sub;
            singleData.city = city;
            localStorage.setItem("Students",JSON.stringify(record))
        }

        setName("");
        setSub("");
        setCity("");
        setEditIndex(null)
    };

    const handleDelete = (i) => {
        let data = record.filter((item)=>item.id != i);
        setRecord(data);
        localStorage.setItem("Students",JSON.stringify(data));
    }

    const handleEdit = (i)=>{
        let singleData = record.find((item)=>item.id == i);
        setName(singleData.name);
        setSub(singleData.sub);
        setCity(singleData.city);
        setEditIndex(i);
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <h1>CRUD With Local Storage</h1>
                    <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required value={name} />
                    <input type="text" placeholder='Enter Your Subject' onChange={(e) => setSub(e.target.value)} required value={sub} />
                    <input type="text" placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)} required value={city} />
                    <button type='submit'>{editIndex==null?"Submit":"Update"}</button>
                </form>
                <hr />

                <table border={1} width={"100%"}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>City</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record &&
                            record.map((e, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.sub}</td>
                                    <td>{e.city}</td>
                                    <td><button onClick={()=>handleEdit(e.id)} >Edit</button></td>
                                    <td><button onClick={()=>handleDelete(e.id)} >Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}
