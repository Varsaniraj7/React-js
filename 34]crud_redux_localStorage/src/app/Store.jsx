import { configureStore } from "@reduxjs/toolkit";
import  TodoSlice  from "../features/Slice";


export const store = configureStore({
    reducer : {
        TodoKey:TodoSlice,
    },
})