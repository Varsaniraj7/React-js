import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from '../features/TodoSlice';

export default function CrudWithRedux() {
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("");

    const [editIndex, setEditIndex] = useState(null);


    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.TodoSliceKey.data;
    })

    const handleAdd = () => {
        if (editIndex == null) {
            let obj = { id: Date.now(), task, priority };
            dispatch(addData(obj));
        } else {
            let editObj = { id: editIndex, task, priority }
            dispatch(updateData(editObj))
        }
        setTask("");
        setPriority("");
        setEditIndex(null);
    }

    const handleDelete = (i) => {
        dispatch(deleteData(i))
    }
    const handleEdit = (e) => {
        setEditIndex(e.id);
        setTask(e.task)
        setPriority(e.priority)
    }

    return (
        <div>
            <div>
                <h1>CrudWithRedux</h1>
                <input type="text" placeholder='Enter Your Task' onChange={(e) => setTask(e.target.value)} value={task} />
                <input type="text" placeholder='Enter Your Priority' onChange={(e) => setPriority(e.target.value)} value={priority} />
                <button onClick={handleAdd} >{editIndex ? "Update" : "Add"}</button>
            </div>
            <div>
                <table border={1} >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Priority</th>
                            <th colSpan={2} >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data &&
                            data.map((e, i) => {
                                return (
                                    <tr key={i} >
                                        <td>{i + 1}</td>
                                        <td>{e.task}</td>
                                        <td>{e.priority}</td>
                                        <td><button onClick={() => handleDelete(e.id)} >Delete</button></td>
                                        <td><button onClick={() => handleEdit(e)} >Edit</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
