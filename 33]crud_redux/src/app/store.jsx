import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "../features/TodoSlice";


export const store = configureStore({
    reducer:{
        TodoSliceKey : todoSlice,
    }
})