import { useQuery } from "react-query";
import { getOwnerProjectsApi } from "../../services/ProjectService";

export default function useOwnerProjects(){
    const {isLoading , data} = useQuery({
        queryKey : ["owner-projects"] , 
        queryFn : getOwnerProjectsApi
    })
    const {projects = {}} = data || {};
    return {isLoading, projects}
    
}