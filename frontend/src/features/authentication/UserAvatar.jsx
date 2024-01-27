import useUser from "./useUser"

export default function UserAvatar(){
    const {user,isLoading} = useUser()
    // console.log("user.name" , user?.name);

    return(
        <div className="flex items-center gap-x-2 text-secondary-600">
            <img src="/user.jpg" alt="user-account"
                 className="w-7 h-7 rounded-full object-cover object-center" 
            />
            <span>{user?.name}</span>
        </div>
    )
}