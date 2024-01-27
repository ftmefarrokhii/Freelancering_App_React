import { useEffect, useState } from "react"
import OTPInput from 'react-otp-input'
import { useMutation } from "react-query"
import {checkOtp} from '../../services/authService'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import {HiArrowRight} from 'react-icons/hi'
import {CiEdit} from 'react-icons/ci'
import Loading from "../../ui/Loading"
export default function CheckOTPForm({phoneNumber ,onBack, onResendOtp , OtpResponse}){
    console.log("CheckOTPForm");
    const RESEND_TIME = 90
    const[otp,setOtp] = useState("")
    const[time,setTime] = useState(RESEND_TIME)
    const {isPending,data,error,mutateAsync} = useMutation({
        mutationFn : checkOtp
    })
    const navigate = useNavigate()

    const checkOtpHandler = async (e)=>{
        e.preventDefault()
        try {
            const {message , user} = await mutateAsync({phoneNumber ,otp})
            console.log(data);

            toast.success(message)
            if(!user.isActive) return navigate("/complete-profile")
            if(user.status !== 2){
                navigate("/")
                toast.error("پروفایل شما در انتظار تایید است",{
                    icon: '👏',
                })
                return;
            } 
            // push to panel /owner or /freelancer based on role
            if(user.role === "OWNER") return navigate('/OWNER')
            if(user.role === "FREELANCER") return navigate('/FREELANCER')
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    useEffect(()=>{
        const timer = time > 0 && setInterval(()=>{
            setTime((t)=> t - 1)
        },1000)
        return ()=>{
            if(timer) clearInterval(timer)
        }
    },[time])
    
    return(
        <div>
            <button onClick={onBack}><HiArrowRight className="h-6 w-6 text-secondary-500"/></button>
            {OtpResponse && (
                <p className="flex items-center gap-x-2 my-4"> 
                    <span className="text-secondary-500">{OtpResponse?.message}</span>
                    <button onClick={onBack}><CiEdit className="h-6 w-6 text-primary-900"/></button>
                </p>
            )}
            <div className="mb-4 text-secondary-500">{time > 0 ? (
                <p>{time}ثانیه تا ارسال مجدد کد</p> 
                ) : (
                    <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
                )}
            </div>
            
            <form className="space-y-10" onSubmit={checkOtpHandler}>
                <p className="font-bold text-secondary-800">کد تایید را وارد کنید </p>
                <OTPInput value={otp} onChange={setOtp} numInputs={6}
                            renderSeparator={<span>-</span>}
                            renderInput={(props)=> <input type="number" {...props}/>}
                            containerStyle="flex flex-row-reverse gap-x-2 justify-center"
                            inputStyle={{
                                width:"2.5rem",
                                padding:"0.5rem 0.2rem",
                                border: "1px solid rgb(var(--color-primary-300))",
                                borderRadius:"0.5rem"
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
    )
}