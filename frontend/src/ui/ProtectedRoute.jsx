import { useEffect } from "react"
import useAuthorize from "../features/authentication/useAuthorize"
import Loading from "./Loading"
import { useNavigate } from "react-router-dom"

export default function ProtectedRoute({children}){
    const navigate = useNavigate()
    // 1. load the authenticated user 
    const {user,isLoading ,isAuthenticated,isAuthorized,isVerified} = useAuthorize()
    // 2 .check if is Authenticated or not.check if is Authorized or not.
    useEffect(()=>{
        if(!isAuthenticated && !isLoading) navigate("/auth")
        if(!isVerified && !isLoading) navigate("/")  // yani age status user 2 nabood
        if(!isAuthorized && !isLoading) navigate("/not-access" , {replace : true})
    },[isAuthenticated,isAuthorized,isLoading,navigate])
    // 3. while loading show a loading
    if(isLoading) return(
        <div className="flex items-center justify-center h-screen bg-secondary-100">
            <Loading />
        </div>
    )
    //4. if user isAuthenticated && isAuthorized render app
    if(isAuthenticated && isAuthorized) return children
}