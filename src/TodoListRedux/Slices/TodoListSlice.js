
import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        input: "",
        tasks: [],
        editing: false,
        complet: []

    }
    ,
    reducers: {
        setInput: function (state, action) {

            state.input = action.payload

        },
        setTasks: function (state, action) {
            if (state.editing !== false) {
                state.tasks[state.editing] = state.input
                state.editing = false
                state.input=""
            } else {
                if (state.input.length > 0) {
                    state.tasks = [...state.tasks, state.input]
                    state.input = ""
                }
            }
        },
        deleteTask: function (state, action) {
            state.tasks = state.tasks.filter((task, index) => {
                return index !== action.payload
            })
            state.complet = state.complet.filter((task, index) => {
                if (index === action.payload) {
                    return false
                }
                else {
                    return true
                }
            })
        },
        editTask: function (state, action) {

            state.editing = action.payload
            state.input = state.tasks[action.payload]

        },

        checkTask: function (state, action) {
            state.complet = [...state.complet, action.payload]
            //  console.log(action.payload)
        }

    }
})
export const { setInput, setTasks, deleteTask, editTask, checkTask } = todoSlice.actions
export default todoSlice.reducer