export default function ProtectedComp({isLogged = false, children}) {
    // return (
    //     <>
    //         <p>Status: {isLogged.toString()}</p>
            
    //         {
    //             isLogged
    //                 ?
    //                     {children}
    //                 :
    //                     <p>You need to login to view this feature!</p>
    //         }
    //     </>
    // )

    if(isLogged)
        return children; // component
    else
        return (
            <>
                <p>You need to login to view this feature!</p>
            </>
        )
}
