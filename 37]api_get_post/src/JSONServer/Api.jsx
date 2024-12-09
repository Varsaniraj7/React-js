import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Api() {

    const [record, setRecord] = useState([]);
    const [title, setTitle] = useState();
    const [views, setViews] = useState();

    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {
        let data = await axios.get("http://localhost:5000/posts");
        console.log(data);
        setRecord(data.data);
    }

    const addData = async () => {
        let obj = { id: record.length + 1, title, views };
        let sendData = await axios.post ("http://localhost:5000/posts", obj);
        setRecord([...record, obj])
    }

    return (
        <div>
            <input type="text" placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder='Enter Views' onChange={(e) => setViews(e.target.value)} />
            <button onClick={addData} >Add Data</button>
            <h1>Api</h1>
            {
                record && record.map((e, i) => {
                    return <ul key={i} >
                        <li>{e.id}</li>
                        <li>{e.title}</li>
                        <li>{e.views}</li>
                    </ul>
                })
            }
        </div>
    )
}
