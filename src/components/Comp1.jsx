import { useState } from "react"
import Comp3 from "./Comp3";

export default function Comp1({parent, change}) {
    const [childName, setChildName] = useState("Child 1");
    

    return (
        <>
            <h2>Component 1</h2>

            <p>My Name is: {childName}</p>
            <p>My Parent's name is: {parent}</p>

            <p><button onClick={change}>Update Parent from Child</button></p>

            <Comp3 parent={parent} />
        </>
    )
}