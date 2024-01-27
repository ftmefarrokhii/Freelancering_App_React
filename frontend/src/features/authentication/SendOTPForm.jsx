import TextField from "../../ui/TextField"
import Loading from "../../ui/Loading"

export default function SendOTPForm({register , sendOtpHandler ,isSendingOtp}){
    console.log("SendOTPForm");

    return(
        <div>
            <form className="space-y-8" onSubmit={sendOtpHandler}>
                <TextField label="شماره موبایل" 
                           name="phoneNumber"
                           register={register}
                        //    errors={errors}
                        //    validationSchema={{
                        //     required : "شماره تلفن ضروری است",
                            
                        //    }}
                />
                <div>
                    {isSendingOtp ? ( 
                        <Loading />
                    ) : (
                    <button type="submit" className="btn btn--primary w-full">ارسال کد تایید</button>
                    )}
                </div>
            </form>
        </div>
    )
}