import { useMutation } from "react-query";
import { ChangeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";

export default function useChangeUserStatus(){
    const {isLoading : isChangingUserStatus , mutate : changeUserStatus} = useMutation({
        mutationFn : ChangeUserStatusApi,
        onSuccess : (data) => {
            toast.success(data.message)
        },
        onError : (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    
    return {isChangingUserStatus , changeUserStatus}
}