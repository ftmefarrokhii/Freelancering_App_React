import { Link } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Loading from "../ui/Loading";
import useLogout from "../features/authentication/useLogout";

export default function Home(){
    const { user , isLoading } = useUser()
    const { isPending , logout } = useLogout()

    if(isLoading || isPending) return <Loading />
    console.log(user);

    function render() {
       
        if(!user) return (
            <Link to="/auth">ورود</Link>
        )
        if(user && user.status !== 2 && user.isActive) return(
            <div className="flex flex-col space-y-4">
                <span>حساب شما در انتظار تایید است</span>  
            </div>
        ) 
        if(user && user.status !== 2 ) return(
            <div className="flex flex-col space-y-4">
                <span>شما از حساب کابری خود خارج شده اید</span>
                <Link to="/auth">ورود</Link>
            </div>
        ) 
        if(user && user.status === 2) return (
            <div className="flex flex-col space-y-4">
                <span>
                {user?.name} عزیز به صفحه فریلنسری خوش آمدید 
                </span>
                <Link to={`${user?.role.toLowerCase()}`}>
                    رفتن به داشبورد
                </Link>
                <button onClick={logout}>خروج از حساب</button>
            </div>
        );     
    }
    return (
        <div className="h-screen bg-secondary-0 flex flex-col justify-center items-center">
            <div className="container xl:max-w-screen-xl text-secondary-700 text-xl p-4 text-center">
                {render()}
            </div>
        </div>
    )
}