import AuthContainer from "../features/authentication/AuthContainer";
export default function AuthPage(){
    return(
        <div className="h-screen bg-secondary-0">
            <div className="container xl:max-w-screen-xl">
                <div className="flex justify-center pt-10">
                    <AuthContainer />
                </div>
            </div>
        </div>
    )
}
