import { useQuery } from "react-query";
import { getUsersApi } from "../services/authService";

export default function useUsers(){
    const {data , isLoading} = useQuery({
        queryKey : ["users"],
        queryFn: getUsersApi
    })
    const { users } = data || {}

    return {users , isLoading}
}