import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({isLogged}) {
    if(isLogged)
        return <Outlet />
    else
        return <p>Protected</p>
}