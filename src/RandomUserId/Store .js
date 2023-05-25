import { configureStore } from "@reduxjs/toolkit";
import randomSliceReducer from "./Slice"
export default configureStore({
    reducer:randomSliceReducer
})