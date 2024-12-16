import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "tasks": [],
}

const ToDoSlice = createSlice({
    "name": "Todo",
    "initialState": initialState,
    "reducers": {
        AddTask: (state, action) => {
            console.log("AddTask");
            state.tasks.push(action.payload);
        },
        RemoveTask: (state, action) => {
            console.log("RemoveTask");
            const temp = state.tasks.filter((task, key) => key !== action.payload);
            console.log(temp);
            state.tasks = temp;
        }
    }
})

export const { AddTask, RemoveTask } = ToDoSlice.actions;

export default ToDoSlice;