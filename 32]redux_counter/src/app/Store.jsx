import { configureStore } from "@reduxjs/toolkit";
import Counter  from "../features/Slice";


export const store = configureStore({
    reducer:{
        CounterKey : Counter,
    },
});