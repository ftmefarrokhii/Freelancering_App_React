import { useMutation, useQueryClient } from "react-query";
import { toggleProjectStatusApi } from "../../services/ProjectService";
import toast from "react-hot-toast";


export default function useToggleProjectStatus(){
    const queryClient = useQueryClient() 

    const {isPending : isTogglingProject, mutate : toggleProjectStatus}  = useMutation({
        mutationFn : toggleProjectStatusApi , 
        onSuccess : (data)=>{
            toast.success(data.message)

            queryClient.invalidateQueries({  
                queryKey : ["owner-projects"]
            })
        },
        onError : (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    return { isTogglingProject , toggleProjectStatus }
}