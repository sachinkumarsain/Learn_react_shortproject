
import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./Slices/TodoListSlice"

 export default configureStore({
    reducer:{
        todo:todoListReducer
    }
})   