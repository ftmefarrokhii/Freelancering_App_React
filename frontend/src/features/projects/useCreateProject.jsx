import { useMutation, useQueryClient } from "react-query";
import { createProjectApi } from "../../services/ProjectService";
import toast from "react-hot-toast";

export default function useCreateProject(){
    const queryClient = useQueryClient() 

    const {isPending : isCreatingProject, mutate : createProject} = useMutation({ 
        mutationFn : createProjectApi,
        onSuccess : (data)=> {
            // console.log(data);
            toast.success(data.message)
            queryClient.invalidateQueries({   // for updating data
                queryKey : ["owner-projects"]
            })
        },
        onError : (err) => {
            console.log(err?.response?.data?.message);
            toast.error(err?.response?.data?.message)
        }
    })
    return { isCreatingProject , createProject }
}