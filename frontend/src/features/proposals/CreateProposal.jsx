import { useForm } from "react-hook-form"
import TextField from "../../ui/TextField"
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

export default function CreateProposal({onClose , projectId}){
    const {formState : {errors} , register , handleSubmit} = useForm()
    const {isCreatingProposal , createProposal} = useCreateProposal()
    const onSubmit = (data)=>{
        console.log(data);
        createProposal({...data , projectId},{
            onSuccess : () => onClose() 
        })
    }
    return (
        <div>
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <TextField label="توشیحات" name="description" register={register} required errors={errors}
                    validationSchema={{
                        required : "توشیحات ضروری است",
                        minLength : {
                            value : 10,
                            message : "توشیحات باید حداقل 10 کاراکتر باشد"
                        }
                    }} 
                />
                <TextField label="قیمت" name="price" register={register} required 
                    errors={errors} type="number"
                    validationSchema={{
                        required : "قیمت ضروری است"    
                    }} 
                />
                <TextField label="مدت زمان" name="duration" register={register} required errors={errors}
                    type="number"
                    validationSchema={{
                        required : "مدت زمان ضروری است"
                    }} 
                />
                <div className="!mt-8">
                { isCreatingProposal ? (
                    <Loading /> 
                    ) : (
                    <button type="submit" className="btn btn--primary w-full">تایید</button>
                    )
                }
            </div>
            </form>
        </div>
    )
}