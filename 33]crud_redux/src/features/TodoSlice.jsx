import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:"todoSlice",
    initialState:{data:[]},
    reducers:{
        addData:(state,action)=>{
            state.data.push(action.payload);
        },
        deleteData:(state,action)=>{
            let data1 = state.data.filter((item)=>item.id != action.payload)
            state.data= data1;
        },
        updateData:(state,action)=>{
            let data1 = state.data.find((item)=>item.id == action.payload.id)
            if(data1){
                data1.task = action.payload.task;
                data1.priority = action.payload.priority;
            }
        },
    }
})

export const {addData,deleteData,updateData} = todoSlice.actions;
export default todoSlice.reducer;