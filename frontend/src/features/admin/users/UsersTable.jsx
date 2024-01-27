import useUsers from "../../../hooks/useUsers"
import Empty from "../../../ui/Empty"
import Loading from "../../../ui/Loading"
import Table from "../../../ui/Table"
import UserRow from "./UserRow"

export default function UsersTable(){
    const {isLoading , users} = useUsers()
    if(isLoading) return <Loading />
    if(!users.length) return <Empty resourceName=" کاربری " />
   
    return(
        
        <Table>
            <Table.Header>
                <th>#</th>
                <th>نام</th>
                <th>ایمیل</th>
                <th>شماره موبایل</th>
                <th>نقش</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {users.map((user, index)=>(
                    <UserRow user={user} index={index} key={user._id}/> 
                ))}
            </Table.Body>

        </Table>
    
                
               
                    
               
          
    )
}