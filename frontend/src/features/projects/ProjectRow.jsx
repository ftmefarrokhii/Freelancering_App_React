import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import TruncateText from "../../utils/TruncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumbersWithComma from "../../utils/toPersianNumbersWithComma";
import {HiEye, HiOutlineTrash} from 'react-icons/hi'
import {TbPencilMinus} from 'react-icons/tb'
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

export default function ProjectRow({project , index}){
    const[isOpenEditing , setIsOpenEditing] = useState(false)
    const[isOpenDeleting , setIsOpenDeleting] = useState(false)
    const {isDeletingProject , removeProject } = useRemoveProject()

    return(
        <Table.Row key={project._id}>
            <td>{index + 1}</td>
            {/* <td>{TruncateText(project.title , 30)}</td> */}
            <td>{project.title}</td>

            <td>{project.category.title}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            {/* <td>{project.tags.join("-")}</td> */}
            <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                    {project.tags.map((tag) => (
                        <span className="badge badge--secondary" key={tag}>{tag}</span>
                    ))}
                </div>
            </td>
            <td>{project.freelancer?.name || "-"}</td>
            <td>
                <ToggleProjectStatus project={project}/>
            </td>
            <td>
                <div className="flex items-center gap-x-4">
                    <>
                    <button onClick={() => setIsOpenEditing(true)}>
                        <TbPencilMinus className="h-5 w-5 text-primary-900"/>
                    </button>
                    <Modal open={isOpenEditing} title={`ویرایش ${project.title}`} onClose={()=>{setIsOpenEditing(false)}}>
                        <CreateProjectForm 
                            onClose={()=>{setIsOpenEditing(false)}}
                            projectToEdit={project}
                        />
                    </Modal>
                    </>

                    <>
                    <button onClick={()=> setIsOpenDeleting(true)}>
                        <HiOutlineTrash className="h-5 w-5 text-error"/>
                    </button>
                    <Modal open={isOpenDeleting} title={`حذف ${project.title}`} onClose={()=>{setIsOpenDeleting(false)}}>
                        <ConfirmDelete resourceName={project.title} 
                                        onClose={()=>{setIsOpenDeleting(false)}}
                                        disabled={false}
                        //inja chon faghat ye argoman dshtim intor nvshtim age 2ta bood object mifrestim
                                        onConfirm={()=>{removeProject(project._id , {
                                            // callback func : harvaght anjam shod ejra mishe
                                            onSuccess : () => setIsOpenDeleting(false)
                                        })}}
                        />
                    </Modal>
                    </>
                </div>

            </td>
            <td>
                <div className="flex justify-center items-center">
                    <Link to={project._id}>
                        <HiEye className="W-5 H-5 text-secondary-800"/>
                    </Link>

                </div>
            </td>

         </Table.Row>      
    )
}