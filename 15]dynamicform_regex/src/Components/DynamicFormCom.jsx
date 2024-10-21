import React, { useState } from 'react'

export default function DynamicFormCom() {

    const [cat,setCat] = useState("");

    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [mail,setMail] = useState("");
    const [phone,setPhone] = useState("");

    const [error,setError] = useState("");

    const phoneRedux = /^(?:\+?\d{1,3}[-. ]?)?(?=\d)(\(?\d{3}\)?[-. ]?)?\d{3}[-. ]?\d{4}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!phoneRedux.test(phone)){
            setError("Phone number is incorrect")
        }else{
            setError("")
        }
    }

    return (
        <div>
            <h1>DynamicFormCom</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} />
                <input type="password" placeholder='Enter Your Password' onChange={(e)=>setPass(e.target.value)} />
                <input type="email" placeholder='Enter Your Email' onChange={(e)=>setMail(e.target.value)} />
                <input type="text" placeholder='Enter Your PhoneNumber' onChange={(e)=>setPhone(e.target.value)} />
                {
                    error && <span>{error}</span>
                }
                <select onChange={(e)=>setCat(e.target.value)} >
                    <option hidden>Categoty</option>
                    <option value={"clothes"}>clothes</option>
                    <option value={"shoes"}>shoes</option>
                    <option value={"electronices"}>electronices</option>
                </select>
                {
                    cat == "clothes" && <input type="text" placeholder='Enter your color' />
                }
                {
                    cat == "shoes" && <input type="number" placeholder='Enter Your size' />
                }
                {
                    cat == "electronices" && <input type="text" placeholder='Enter Your Type' />
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
