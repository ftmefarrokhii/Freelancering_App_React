import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loading from "../../ui/Loading";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

export default function ChangeProposalStatus({onClose, proposalId}){
    const { register , handleSubmit } = useForm()
    
    const options = [
        { label : "رد شده", value : 0 },
        { label : "در انتظار تایید", value : 1 },
        { label : "تایید شده", value : 2 },

    ]
    const { isChangingProposalStatus , changeProposalStatus } = useChangeProposalStatus()
    const queryClient = useQueryClient() 
    const { id : projectId } = useParams()
    const onSubmit = (data) => {
        console.log(data);
        changeProposalStatus({proposalId , projectId , ...data} , { // data:{proposalId , projectId , status}
            onSuccess : () => {
                onClose()
                queryClient.invalidateQueries({  
                    queryKey : ["project",projectId]  
                // etelaat in project ro taghir dadim pas byd etelaat in project ba in key ro dobare fetch konim
                })
            }
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RHFSelect label="تغییر وضعیت" 
                           name="status" 
                           required 
                           options={options}
                           register={register}         
                />
                {isChangingProposalStatus ? (
                    <Loading />
                ) : (
                    <div className="!mt-8">
                        <button className="btn btn--primary w-full" type="submit">تایید</button>
                    </div>
                )}
            </form>
        </div>
    )

    
}