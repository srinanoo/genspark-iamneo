import { useState } from "react"

export default function ToDoComp() {
    const [toDo, setToDo] = useState("");
    const [toDoList, setToDoList] = useState([]);

    const handleToDo = (e) => {
        setToDo(e.target.value);
    }

    const handleAddTask = () => {
        setToDoList((prev) => ([...prev, toDo]));
    }
    
    const handleRemoveTask = (e) => {
        // console.log(e.target.id);
        setToDoList(toDoList.filter((v, i) => i !== parseInt(e.target.id)));
    }

    console.log(toDoList);

    return (
        <>
            <div>
                <input type="text" onChange={handleToDo} placeholder="Enter the Task Name" />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div>
                {
                    toDoList.map((v, i) => {
                        return (
                            <div key={i}>
                                {v} <button id={i} onClick={handleRemoveTask}>-</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}