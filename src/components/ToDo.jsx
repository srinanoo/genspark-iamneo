import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { AddTask, RemoveTask } from "../redux/todo";

export default function ToDo() {
    const dispatch = useDispatch();
    // const ToDoList = useSelector(state => state.tasks);
    const ToDoList = useSelector(state => state.ToDoReducer.tasks);

    const [toDo, setToDo] = useState("");

    const handleToDo = (e) => {
        setToDo(e.target.value);
    }
    
    const handleAddTask = () => {
        dispatch({type: "Todo/AddTask", payload: {"name": toDo, "status": "open"}})

        // dispatch(AddTask({"name": toDo, "status": "open"}))
    }

    const handleRemoveTask = (e) => {
        // dispatch({type: "Todo/RemoveTask", payload: parseInt(e.target.id)})

        dispatch(RemoveTask(parseInt(e.target.id)))
    }

    console.log(ToDoList);

    return (
        <>
            <div>
                <input type="text" onChange={handleToDo} placeholder="Enter the Task Name" />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div>
                {
                    ToDoList.length === 0 && <p>No Tasks</p>
                }
                {
                    ToDoList.map((v, i) => {
                        return (
                            <div key={i}>
                                {v.name} {v.status} <button id={i} onClick={handleRemoveTask}>-</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}