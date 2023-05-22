import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices.js/counterSlice";
export default configureStore({
    reducer:{
        counter:counterSlice
    }
})
