import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalService";

export default function useChangeProposalStatus(){

    const {isPending : isChangingProposalStatus, mutate : changeProposalStatus}  = useMutation({
        mutationFn : changeProposalStatusApi , 
        onSuccess : (data)=>{
            toast.success(data.message)
        },
        onError : (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    return { isChangingProposalStatus , changeProposalStatus }
}