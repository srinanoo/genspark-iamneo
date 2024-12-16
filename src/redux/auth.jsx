import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "auth": [],
}

const AuthSlice = createSlice({
    "name": "Auth",
    "initialState": initialState,
    "reducers": {
        AddAuth: (state, action) => {
            console.log(action, state);
            state.auth.push(action.payload);
        },
        RemoveTask: (state, action) => {
            console.log("RemoveTask");
            const temp = state.tasks.filter((task, key) => key !== action.payload);
            console.log(temp);
            state.tasks = temp;
        }
    }
})

export const { AddAuth, RemoveTask } = AuthSlice.actions;

export default AuthSlice;