import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, fetchApi, updateData } from '../fetures/ApiSlice';

export default function Api() {

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const [editId, setEditId] = useState(null);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi())
    }, [])

    const record = useSelector((state) => {
        return state.ApiKey;
    })

    const addRecord = () => {
        if (editId == null) {
            let obj = { id: String(record.record.length + 1), image, title, description, price, rating };
            dispatch(addData(obj));
        }else{
            let updateObj = { id: editId, image, title, description, price, rating };
            dispatch(updateData({editId,updData:    updateObj}));
            setEditId(null)
        }

        setImage("")
        setTitle("")
        setDescription("")
        setPrice("")
        setRating("")
    }

    const deleteRecord = (i) => {
        dispatch(deleteData(i))
    }

    const updateRecord = (e) => {
        setEditId(e.id)
        setImage(e.image);
        setTitle(e.title);
        setDescription(e.description);
        setPrice(e.price);
        setRating(e.rating);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
                API CRUD Operation
            </h1>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
                <input
                    type="text"
                    placeholder="Enter Image Url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
                <input
                    type="text"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
                <input
                    type="number"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
                <input
                    type="number"
                    placeholder="Enter Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
                <button
                    onClick={addRecord}
                    className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                    {editId ? "Update Data" : "Add Data"}
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {record.loading == false &&
                    record.record.map((e, i) => (
                        <div
                            key={i}
                            className="w-[300px] flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform dark:shadow-gray-700"
                        >
                            <img
                                src={e.image}
                                alt={e.title}
                                className="w-full h-[300px] object-fill"
                            />
                            <div className="w-full p-4">
                                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 h-[50px] text-left content-center">
                                    {e.title}
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    {e.description}
                                </p>
                                <p className="text-xl font-bold text-blue-500 dark:text-blue-400 mt-2">
                                    ${e.price}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mt-1">
                                    Rating: {e.rating} ⭐
                                </p>
                            </div>
                            <div className="flex justify-center gap-4 p-4">
                                <button
                                    onClick={() => updateRecord(e)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 hover:shadow-md dark:bg-blue-700 dark:hover:bg-blue-800 hover:scale-105 transition-transform"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteRecord(e.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 hover:shadow-md dark:bg-red-700 dark:hover:bg-red-800 hover:scale-105 transition-transform"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
