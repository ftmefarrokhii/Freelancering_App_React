import { useMutation, useQueryClient } from "react-query";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogout(){
    const queryClient = useQueryClient() 
    const navigate = useNavigate()
    const {isPending , mutate : logout } = useMutation({ 
        mutationFn : logoutApi,
        onSuccess : () => {
            queryClient.removeQueries()
            navigate("/" , {replace : true})
        },
        onError : (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    return { isPending , logout }
}