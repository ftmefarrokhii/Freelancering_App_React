import { useState } from "react";
import Table from "../../ui/Table";
import Modal from '../../ui/Modal'
import ChangeProposalStatus from "./ChangeProposalStatus";
export default function ProposalRow({proposal,index}){

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
    const {status} = proposal
    const color = status === 2 ? "primary" : "danger"
    const[open,setOpen]= useState(false)
    return(
        <Table.Row>
            <td>{index + 1}</td>
            <td>{proposal.user.name}</td>
            <td>{proposal.description}</td>
            <td>{proposal.duration} روز</td>
            <td>{proposal.price}</td>
            <td>
                <span className={`badge ${statusStyle[status].className}`}>
                    {statusStyle[status].label}
                </span>
            </td>
            <td>
                <button onClick={()=>setOpen(true)}>تغییر وضعیت</button>
                {open && <Modal title="تغییر وضعیت" 
                                onClose={()=> setOpen(false)} 
                                open={open}
                        >
                            <ChangeProposalStatus onClose={()=> setOpen(false)} proposalId ={proposal._id}/>
                        </Modal>}
            </td>

        </Table.Row>
        
    )
}

/*
import Table from "../../ui/Table";

export default function ProposalRow({proposal,index}){
    // 0 reject   1 : dar entezare tayid   2 : tayid shode

    console.log(proposal);

    const {status} = proposal
    const color = status === 2 ? "primary" : "danger"
    return(
        <Table.Row>
            <td>{index + 1}</td>
            <td>{proposal.user.name}</td>
            <td>{proposal.description}</td>
            <td>{proposal.duration} روز</td>
            <td>{proposal.price}</td>
            <td>
                <span className={`badge bg--${color}`}>{proposal.status}</span>
            </td>
            <td>++</td>

        </Table.Row>
        
    )
}
*/