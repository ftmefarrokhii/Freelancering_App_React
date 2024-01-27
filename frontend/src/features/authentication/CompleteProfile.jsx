import TextField from "../../ui/TextField";
import { useMutation } from "react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

export default function CompleteProfile(){
    const {data, error , isPending, mutateAsync} = useMutation({
        mutationFn : completeProfile
    })
    const {register , watch, handleSubmit ,formState : {errors}} = useForm()
    const navigate= useNavigate()

    const submitHandler = async (data) => {
        try {
            const {user, message} = await mutateAsync(data) // {name,email,role} => data
            console.log(user, message)
            toast.success(message)

            if(user.status !== 2){
                navigate("/")
                toast.error("پروفایل شما در انتظار تایید است",{
                    icon: '👏',
                })
                return;
            } 
            if(user.role === "OWNER") return navigate('/owner')
            if(user.role === "FREELANCER") return navigate('/freelancer')

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    return(
        <div className="container xl:max-w-screen-xl">
            <div className="flex flex-col gap-y-6 items-center pt-10">
                <h1 className="font-bold text-3xl text-secondary-700  dark:text-primary-400">تکمیل اطلاعات</h1>
                <div className="sm:max-w-sm w-full">
                    <form className="space-y-8" onSubmit={handleSubmit(submitHandler)}>
                        <TextField label="نام و نام خانوادگی" 
                                    name="name"
                                    register={register}
                                    validationSchema={{
                                        required : "نام و نام خانوادگی ضروری است"
                                    }}
                                    errors={errors}
                        />
                        <TextField label="ایمیل" 
                                    name="email"
                                    register={register}
                                    validationSchema={{
                                        required : "ایمیل ضروری است",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "ایمیل نامعتبر است"
                                        }
                                    }}
                                    errors={errors}
                        />
                        
                        <RadioInputGroup register={register} errors={errors} watch={watch}
                                         configs={{
                                            name : "role",
                                            validationSchema : {
                                                required : "انتخاب نقش ضروری است"
                                            },
                                            options : [
                                                {
                                                    label : "کارفرما", value : "OWNER"
                                                },
                                                {
                                                    label : "فریلنسر", value : "FREELANCER"
                                                }
                                            ]
                                         }}
                        />

                        {isPending ? ( 
                            <Loading />
                            ) : (
                            <button type="submit" className="btn btn--primary w-full">تایید</button>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}