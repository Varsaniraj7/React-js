import { createSlice } from "@reduxjs/toolkit";


export const TodoSlice = createSlice({
    name:"TodoSlice",
    initialState : {data:[]},
    reducers :{
        getData:(state,action)=>{
            state.data = JSON.parse(localStorage.getItem("Lists")) || [];
        },
        addData:(state,action)=>{       
            const updatedData = [...state.data, action.payload];
            state.data = updatedData; // Update the state
            localStorage.setItem("Lists", JSON.stringify(updatedData));
        },
        deleteData:(state,action)=>{
            const updatedData = state.data.filter((item)=>item.id != action.payload)
            state.data = updatedData; // Update the state
            localStorage.setItem("Lists", JSON.stringify(updatedData));
        },
        updateData:(state,action)=>{},
        },
});

export const {getData,addData,deleteData,updateData} = TodoSlice.actions;
export default TodoSlice.reducer;
