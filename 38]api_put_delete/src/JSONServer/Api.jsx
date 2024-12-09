import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Api() {

    const [record, setRecord] = useState([]);

    const [title, setTitle] = useState("");
    const [views, setViews] = useState("");

    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        let data = await axios.get("http://localhost:5000/posts")
        setRecord(data.data);
    }

    const addData = async () => {
        if (editIndex == null) {
            let obj = { id: String(record.length + 1), title, views };
            let sendRecord = await axios.post("http://localhost:5000/posts", obj);
            setRecord([...record, obj])
        } else {
            let updateObj = { id: editIndex, title, views }
            let updateData = await axios.put(`http://localhost:5000/posts/${editIndex}`, updateObj)
            setRecord(
                record.map((e) => e.id === editIndex ? updateObj : e)
            )
            setEditIndex(null)
        }
        setTitle("")
        setViews("")
    }

    const deleteData = async (id) => {
        let deleteRecord = await axios.delete(`http://localhost:5000/posts/${id}`)
        fetchApi()
    }

    const editData = async (id) => {
        let item = record.find((item) => item.id === id)
        if (item) {
            setTitle(item.title)
            setViews(item.views)
            setEditIndex(id)
        }
    }

    return (
        <div>
            <h1>Api</h1>
            <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder='Enter Views' value={views} onChange={(e) => setViews(e.target.value)} />
            <button onClick={addData}>{editIndex ? "Update Data" : "Add Data"}</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Views</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record && record.map((e, i) => {
                            return <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                                <td>{e.views}</td>
                                <td><button onClick={() => editData(e.id)}>Edit</button></td>
                                <td><button onClick={() => deleteData(e.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
