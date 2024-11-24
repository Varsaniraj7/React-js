import React, { useState } from 'react'

export default function Components() {
    const [filtered,setFiltered] = useState("All");
    const data =[
        {id:1,name:"Apple",category:"Fruit",price:2},
        {id:2,name:"Carrot",category:"Vegetable",price:1},
        {id:3,name:"Banana",category:"Fruit",price:1.5},
        {id:4,name:"Broccoli",category:"Vegetable",price:2.5},
        {id:5,name:"Mango",category:"Fruit",price:3},
    ]

    const filteredData = filtered == "All" ? data:data.filter((item)=>item.category==filtered);

    return (
        <div>
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
        </div>
    )
}
