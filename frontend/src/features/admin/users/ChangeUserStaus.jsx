import { useForm } from "react-hook-form";
import Loading from "../../../ui/Loading";
import RHFSelect from "../../../ui/RHFSelect";
import useChangeUserStatus from "./useChangeUserStatus";
import { useQueryClient } from "react-query";

export default function ChangeUserStatus({userId,onClose}){
    const { isChangingUserStatus  , changeUserStatus} = useChangeUserStatus()
    const {handleSubmit , register} = useForm()
    const options = [
        {
            label: "رد شده",
            value : 0
        },
        {
            label: "در انتظار تایید",
            value : 1
        },
        {
            label: "تایید شده",
            value : 2
        }
    ]
    const queryClient = useQueryClient();


    const onSubmit = (data) => {
        console.log(data);

        changeUserStatus({userId , data} , {  // {userId , {status : 1,2,0} }
            onSuccess : () => {
                onClose()
                queryClient.invalidateQueries({  
                    queryKey : ["user"]  
                // etelaat in user ro taghir dadim pas byd etelaat in project ba in key ro dobare fetch konim
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
                {isChangingUserStatus ? (
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