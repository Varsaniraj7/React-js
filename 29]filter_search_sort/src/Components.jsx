import React, { useState } from 'react'

export default function Components() {
    const [filtered,setFiltered] = useState("All");
    const [searchedTerm,setSearchedTerm] = useState("");
    const [sortOrder,setSortOrder] = useState("asc");
    const data =[
        {id:1,name:"Apple",category:"Fruit",price:2},
        {id:2,name:"Carrot",category:"Vegetable",price:1},
        {id:3,name:"Banana",category:"Fruit",price:1.5},
        {id:4,name:"Broccoli",category:"Vegetable",price:2.5},
        {id:5,name:"Mango",category:"Fruit",price:3},
    ]

    const filteredData = filtered == "All" ? data:data.filter((item)=>item.category==filtered);

    const searchedData = data.filter((item)=>item.name.toLowerCase().includes(searchedTerm.toLowerCase()))

    const sortedData = [...data].sort((a,b)=>sortOrder==="asc"?a.price-b.price:b.price-a.price)

    return (
        <div className='M'>
            <h1>Filter By Category</h1>
            <select onChange={(e)=>setFiltered(e.target.value)}>
                <option value="All">All</option>
                <option value="Fruit">Fruit</option>
                <option value="Vegetable">Vegetable</option>
            </select>
            <ul>
                {
                    filteredData.map((item)=>(
                        <li key={item.id} >
                            {item.name}-{item.category}-{item.price}
                        </li>
                    ))
                }
            </ul>
            <h1>Search By Name</h1>
            <input type="text" placeholder='Search by item' value={searchedTerm} onChange={(e)=>setSearchedTerm(e.target.value)} />
            <ul>
                {
                    searchedData.map((item)=>(
                        <li key={item.id} >
                            {item.name}-{item.category}-{item.price}
                        </li>
                    ))
                }
            </ul>
            <h1>Sort By Price</h1>
            <button onClick={()=>setSortOrder("asc")}>Ascending</button>
            <button onClick={()=>setSortOrder("desc")}>Descending</button>
            <ul>
                {
                    sortedData.map((item)=>(
                        <li key={item.id} >
                            {item.name}-{item.category}-{item.price}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
