import { useState } from "react"
import Table from "../../../ui/Table"
import toLocalDateShort from "../../../utils/toLocalDateShort"
import toPersianNumbersWithComma from "../../../utils/toPersianNumbersWithComma"
import {MdAssignment} from 'react-icons/md'
import Modal from "../../../ui/Modal"
import CreateProposal from "../../proposals/CreateProposal"
const ProjectStatus = {
    OPEN : {
        label : "باز" , 
        className : "badge--success"
    },
    CLOSED : {
        label : "بسته" , 
        className : "badge--danger"
    }
}
export default function FreelancerProjectRow({project,index}){
    const {status,title,budget,deadline} = project
    const[isOpen , setIsOpen] = useState(false)
    return(
        <Table.Row>
            <td>{index + 1}</td> 
            <td>{title}</td>
            <td>{toPersianNumbersWithComma(budget)}</td>
            <td>{toLocalDateShort(deadline)}</td>
            <td>
                <span className={`badge ${ProjectStatus[status].className}`}>{ProjectStatus[status].label}</span>
            </td>
            <td>
                <button onClick={() => setIsOpen(true)}>
                    <MdAssignment className="h-5 w-5 text-primary-900"/>

                </button>
                {open && (
                    <Modal open={isOpen} title={`درخواست انجام پروژه ${title}`} onClose={()=>{setIsOpen(false)}}>
                        <CreateProposal onClose={()=>{setIsOpen(false)}} projectId={project._id}/>
                    </Modal>

                )}
            </td>

         </Table.Row>      
    )
}