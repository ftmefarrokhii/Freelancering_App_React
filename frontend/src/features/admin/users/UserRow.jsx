import { useState } from "react";
import Table from "../../../ui/Table"
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStaus";

export default function UserRow({user , index}){
    const[open, setOpen] = useState(false)
    const {status} = user;

    const statusStyle = [
        {
            label: "رد شده",
            className : "badge--danger"
        },
        {
            label: "در انتظار تایید",
            className : "badge--secondary"
        },
        {
            label: "تایید شده",
            className : "badge--success"
        }
    ]
    return(
        <Table.Row >
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.role}</td>            
            <td>
                <div className={`badge ${statusStyle[status].className}`}>
                    {statusStyle[status].label}
                </div>
            </td>
            <td>
               <Modal open={open} onClose={() => setOpen(false)} title="تغییر وضعیت کاربر">
                    <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)}/>
               </Modal>
               <button onClick={ ()=> setOpen(true) }>تغییر وضعیت</button>
            </td>

         </Table.Row>      
    )

}