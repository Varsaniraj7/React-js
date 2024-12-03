import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, getData } from '../features/Slice';

export default function Todo() {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.TodoKey;
    })

    useEffect(()=>{
        dispatch(getData())
    },[dispatch])

    const handleAdd = () => {
        let obj = { id: Date.now(), input }
        dispatch(addData(obj))
        setInput("")
    }

    const handleDelete = (i) =>{
        dispatch(deleteData(i))
    }
    return (
        <>
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-700 hover:text-blue-500 transition-colors duration-300">
                Todo List
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Enter Your Task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-72 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-sm 
                 hover:shadow-md transition-shadow duration-300"
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg 
                 hover:bg-blue-600 active:scale-95 transform 
                 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                    Add
                </button>
            </div>
            <div className="flex justify-center">
                <div className="w-full max-w-2xl overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 border border-gray-300 text-left w-3/4">Tasks</th>
                                <th className="px-4 py-2 border border-gray-300 w-1/4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data &&
                                data.data.map((e, i) => (
                                    <tr key={i} className="hover:bg-gray-100 transition-colors">
                                        <td className="px-4 py-2 border border-gray-300 text-gray-700">{e.input}</td>
                                        <td className="px-4 py-2 border border-gray-300 flex gap-2 justify-center">
                                            <button
                                                onClick={() => handleEdit(e)}
                                                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition-colors duration-200"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(e.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-200"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>




    )
}
