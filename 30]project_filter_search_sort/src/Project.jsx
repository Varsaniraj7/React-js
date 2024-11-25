import React, { useState } from 'react';

export default function Project() {
    const [filtered, setFiltered] = useState("All");
    const [searchedTerm, setSearchedTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [data, setData] = useState([
        { id: 1, name: "Apple", category: "Fruit", price: 2 },
        { id: 2, name: "Carrot", category: "Vegetable", price: 1 },
        { id: 3, name: "Banana", category: "Fruit", price: 1.5 },
        { id: 4, name: "Broccoli", category: "Vegetable", price: 2.5 },
        { id: 5, name: "Mango", category: "Fruit", price: 3 },
    ]);
    const [newItem, setNewItem] = useState({ name: "", category: "Fruit", price: "" });

    // Filter, search, and sort in one pipeline
    const processedData = data
        .filter((item) => (filtered === "All" ? true : item.category === filtered))
        .filter((item) => item.name.toLowerCase().includes(searchedTerm.toLowerCase()))
        .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

    const addItem = () => {
        if (newItem.name && newItem.price) {
            const newId = data.length ? data[data.length - 1].id + 1 : 1; // Generate a new unique ID
            setData([...data, { id: newId, ...newItem, price: parseFloat(newItem.price) }]);
            setNewItem({ name: "", category: "Fruit", price: "" }); // Reset the form
        } else {
            alert("Please fill in all fields before adding an item.");
        }
    };

    return (
        <>
            <h1>Filter, Search, and Sort Items</h1>

            {/* Filter by Category */}
            <div>
                <label>Filter by Category:</label>
                <select value={filtered} onChange={(e) => setFiltered(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>
            </div>

            {/* Search by Name */}
            <div>
                <label>Search by Name:</label>
                <input
                    type="text"
                    placeholder="Search by item"
                    value={searchedTerm}
                    onChange={(e) => setSearchedTerm(e.target.value)}
                />
            </div>

            {/* Sort by Price */}
            <div>
                <label>Sort by Price:</label>
                <button onClick={() => setSortOrder("asc")}>Ascending</button>
                <button onClick={() => setSortOrder("desc")}>Descending</button>
            </div>

            {/* Display Processed Data */}
            <ul>
                {processedData.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.category} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>

            {/* Add New Item */}
            <h2>Add a New Item</h2>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
                <select
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                >
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>
                <input
                    type="number"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                />
                <button onClick={addItem}>Add Item</button>
            </div>
        </>
    );
}
