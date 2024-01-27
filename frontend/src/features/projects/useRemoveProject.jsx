import { useMutation, useQueryClient } from "react-query";
import { removeProjectApi } from "../../services/ProjectService";
import toast from "react-hot-toast";

export default function useRemoveProject(){
    const queryClient = useQueryClient()
    const {isPending : isDeletingProject , mutate : removeProject} = useMutation({
        mutationFn : removeProjectApi ,
        onSuccess : (data)=> {
            console.log(data);
            toast.success(data.message)
            queryClient.invalidateQueries({   // for updating data
                queryKey : ["owner-projects"]
            })
        },
        onError : (err) => {
            console.log(err);
            toast.error(err?.response?.data?.message)
        }
    })
    return {isDeletingProject , removeProject}
}