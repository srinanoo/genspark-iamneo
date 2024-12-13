import { useState } from "react"

export default function ChildComp(props) {

    const [name, setName] = useState(props.name);

    return (
        <>
            Name: {props.name}

            
        </>
    )
}