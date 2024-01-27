import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from './CheckOTPForm'
import { useMutation } from "react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function AuthContainer(){
    const[step,setStep] = useState(1)
    
    const {isPending: isSendingOtp,data : OtpResponse, error, mutateAsync} = useMutation({
        mutationFn : getOtp
    })
    const {register , getValues, handleSubmit} = useForm()
    
    const sendOtpHandler = async (data) =>{
        console.log(data);

        try {
            const {message} = await mutateAsync(data)
            setStep(2)
            console.log("step", step);
            console.log(message);
            toast.success(message)
            
        } catch (error) {
            toast.error(error?.response?.data?.message)
        } 
    }
    const renderStep = ()=>{
        switch (step) {
            case 1:
                return(
                    <SendOTPForm setStep={setStep} 
                                isSendingOtp={isSendingOtp}
                                register={register}
                                sendOtpHandler={handleSubmit(sendOtpHandler)} 
                    />
                );
            case 2:
                return (
                    <CheckOTPForm phoneNumber={getValues("phoneNumber")} 
                                onResendOtp={sendOtpHandler} 
                                OtpResponse={OtpResponse}
                                onBack={() => setStep((s)=> s - 1 )}
                    />
                );
            default:
                return null;
        }
    }
    return <div className="w-full sm:max-w-sm">{renderStep()}</div>
    
}
