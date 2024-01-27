import { useQuery } from "react-query";
import { getSingleProjectApi } from "../../services/ProjectService";
import { useParams } from "react-router-dom";

export default function useProject(){
    const {id} = useParams()

    const {isLoading , data} = useQuery({
        queryKey : ["project" , id] , 
        queryFn : () => getSingleProjectApi(id)
    })

    const { project } = data || {};
    return {isLoading, project}
    
}