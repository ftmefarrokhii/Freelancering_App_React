import { useMutation,useQueryClient } from "react-query";
import { EditProjectApi } from "../../services/ProjectService";
import toast from "react-hot-toast";

export default function useEditProject(){
    const queryClient = useQueryClient() 

    const {isPending : isEditingProject, mutate : editProject} = useMutation({
        mutationFn : EditProjectApi , 
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
    return {isEditingProject , editProject}
}