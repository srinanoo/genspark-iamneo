import { createSlice, configureStore } from "@reduxjs/toolkit";

import ToDoSlice from "./todo";
import AuthSlice from "./auth";
import { AddTask } from "./todo";
// import { AddAuth } from "./auth";


const ToDoStore = configureStore({
    // reducer: ToDoSlice.reducer

    // combine reducers
    reducer: {
        "ToDoReducer": ToDoSlice.reducer,
        "AuthReducer": AuthSlice.reducer,
    }
})

ToDoStore.subscribe(() => {
    console.log("current state", ToDoStore.getState());
})

// ToDoStore.dispatch(AddTask({"name": "Task 1", "status": "open"}))
// ToDoStore.dispatch({type: "Todo/AddTask", payload: {name: "Updated Task", status: "open"}});

// ToDoStore.dispatch(AddAuth({"name": "Auth 1", "status": "open"}))
// ToDoStore.dispatch({type: "Auth/AddAuth", payload: {name: "Auth 1", status: "open"}});


export default ToDoStore;