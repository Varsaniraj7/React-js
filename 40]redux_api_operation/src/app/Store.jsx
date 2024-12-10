import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../fetures/ApiSlice";


export const store = configureStore({
    reducer: {
        ApiKey: apiSlice,
    },
})