import { useState } from "react";

export default function Comp2({parent}) {
    const [childName, setChildName] = useState("Child 2");

    return (
        <>
            <h2>Component 2</h2>

            <p>My Name is: {childName}</p>
            <p>My Parent's name is: {parent}</p>
        </>
    )
}