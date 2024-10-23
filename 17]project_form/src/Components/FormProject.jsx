import React, { useState } from 'react';

export default function FormProject() {
    const [cat, setCat] = useState("");

    const [name, setName] = useState("");
    const [comname, setComname] = useState("");
    const [proname, setProname] = useState("");
    const [proprice, setProprice] = useState("");

    const [nameError, setNameError] = useState("");
    const [comNameError, setComNameError] = useState("");
    const [proNameError, setProNameError] = useState("");
    const [proPriceError, setProPriceError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false; 
        if (name === "") {
            setNameError("Enter Name");
            hasError = true;
        } else {
            setNameError("");
        }

        if (comname === "") {
            setComNameError("Enter Company Name");
            hasError = true;
        } else {
            setComNameError("");
        }

        if (proname === "") {
            setProNameError("Enter Product Name");
            hasError = true;
        } else {
            setProNameError("");
        }
        
        if (proprice === "") {
            setProPriceError("Enter Product Price");
            hasError = true;
        } else {
            setProPriceError("");
        }

        if (!hasError) {
            console.log("Form submitted successfully");
            setName("");
            setComname("");
            setProname("");
            setProprice("");
            setCat("");
        }
    };

    const areFieldsFilled = name && comname && proname && proprice;

    return (
        <div className="container">
            <h1>Form Project</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                {nameError && <span className="error">{nameError}</span>}

                <label>Company Name:</label>
                <input type="text" placeholder='Enter Your Company Name' value={comname} onChange={(e) => setComname(e.target.value)} />
                {comNameError && <span className="error">{comNameError}</span>}

                <label>Product Name:</label>
                <input type="text" placeholder='Enter Your Product Name' value={proname} onChange={(e) => setProname(e.target.value)} />
                {proNameError && <span className="error">{proNameError}</span>}

                <label>Product Price:</label>
                <input type="text" placeholder='Enter Your Product Price' value={proprice} onChange={(e) => setProprice(e.target.value)} />
                {proPriceError && <span className="error">{proPriceError}</span>}

                <label>Category:</label>
                <select value={cat} onChange={(e) => setCat(e.target.value)} disabled={!areFieldsFilled}>
                    <option hidden>Categories</option>
                    <option value="clothes">Clothes</option>
                    <option value="electronics">Electronics</option>
                    <option value="accessories">Accessories</option>
                    <option value="mobile">Mobile</option>
                </select>

                {cat && (
                    <div className="category-section">
                        {cat === "clothes" && (
                            <>
                                <label>Cloth Categories:</label>
                                <input type="text" placeholder='Enter Your Cloth Categories' required />
                                <label>Size:</label>
                                <input type="text" placeholder='Enter Your Cloth Size' required />
                                <label>Color:</label>
                                <input type="text" placeholder='Enter Your Cloth Color'required />
                            </>
                        )}
                        {cat === "electronics" && (
                            <>
                                <label>Electronics Categories:</label>
                                <input type="text" placeholder='Enter Your Electronics Categories' required />
                                <label>Warranty:</label>
                                <input type="text" placeholder='Enter Your Electronics Warranty' required />
                                <label>Color:</label>
                                <input type="text" placeholder='Enter Your Electronics Color' required />
                            </>
                        )}
                        {cat === "accessories" && (
                            <>
                                <label>Accessories Categories:</label>
                                <input type="text" placeholder='Enter Your Accessories Categories' required />
                                <label>Size:</label>
                                <input type="text" placeholder='Enter Your Accessories Size' required />
                                <label>Color:</label>
                                <input type="text" placeholder='Enter Your Accessories Color' required />
                            </>
                        )}
                        {cat === "mobile" && (
                            <>
                                <label>Mobile Categories:</label>
                                <input type="text" placeholder='Enter Your Mobile Categories' required />
                                <label>Storage:</label>
                                <input type="text" placeholder='Enter Your Mobile Storage' required />
                                <label>Color:</label>
                                <input type="text" placeholder='Enter Your Mobile Color' required />
                            </>
                        )}
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
