import { useLocation } from "react-router-dom";
import useUser from "./useUser";


export default function useAuthorize(){
    const {user,isLoading} = useUser();
    let isAuthenticated = false;
    if(user) isAuthenticated = true;

    let isVerified = false;
    if(user && user.status === 2) isVerified = true;
    
    let isAuthorized = false;

    const {pathname} = useLocation()
    console.log(pathname.split("/").at(1));  //msln  ['', 'freelancer', 'dashboard']  // role mide
    const desiredRole = pathname.split("/").at(1)

    const ROLES = {
        admin : "ADMIN",
        freelancer : "FREELANCER",
        owner : "OWNER",
    }
    if(Object.keys(ROLES).includes(desiredRole)){
        if(user && user.role === ROLES[desiredRole]) isAuthorized=true
    }
    return {user,isLoading ,isAuthenticated,isAuthorized ,isVerified}
}