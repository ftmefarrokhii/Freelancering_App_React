import { useQuery } from "react-query";
import { getProjectsApi } from "../services/ProjectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects(){
    // const location = useLocation()
    // const queryObject = queryString.parse(location.search)

    const {search} = useLocation()
    console.log("search",search);
    // ravesh 1 : ba query string
    // const queryObject = queryString.parse(search)

    // ravesh 2 
    const queryObject = Object.fromEntries(new URLSearchParams(search))
    console.log("queryObject",queryObject);

    const {isLoading , data} = useQuery({
        queryKey : ["projects",queryObject] , 
        queryFn : () => getProjectsApi(search),
    })

    const {projects = {}} = data || {};

    return {isLoading, projects}
    
}