import { useState } from "react"
import Empty from "../../ui/Empty"
import Loading from "../../ui/Loading"
import Modal from "../../ui/Modal"
import Table from "../../ui/Table"
import ProjectRow from "./ProjectRow"
import useOwnerProjects from "./useOwnerProjects"
import CreateProjectForm from "./CreateProjectForm"

export default function ProjectTable(){
    const {isLoading, projects} = useOwnerProjects()
    const[isOpen,setIsOpen] = useState(false)
    // console.log(projects);

    if(isLoading) return <Loading />
   
    return(
        <>
        <div className="flex justify-between items-center mb-8">
            {!projects.length ? <Empty resourceName=" پروژه " /> : <h1 className="text-primary-100">پروژه های شما</h1>}
            <button onClick={()=> setIsOpen(true)} className="btn btn--primary">افزودن پروژه</button>
            
            {isOpen && 
                <Modal title="افزودن پروژه جدید" onClose={()=>setIsOpen(false)} open={isOpen}>
                    <CreateProjectForm onClose={()=>setIsOpen(false)}/>
                </Modal>
            }
            
        </div>
        { projects.length ? (

        
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>دسته بندی</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>تگ ها</th>
                <th>فریلنسر</th>
                <th>وضعیت</th>
                <th>عملیات</th>
                <th>درخواست ها</th>
            </Table.Header>
            <Table.Body>
                {projects.map((project, index)=>(
                    <ProjectRow project={project} index={index} key={index}/> 
                ))}
            </Table.Body>

        </Table>
        ) : ""
        }
        </>  
    )
}



// import Empty from "../../ui/Empty"
// import Loading from "../../ui/Loading"
// import TruncateText from "../../utils/TruncateText"
// import toLocalDateShort from "../../utils/toLocalDateShort"
// import toPersianNumbersWithComma from "../../utils/toPersianNumbersWithComma"
// import useOwnerProjects from "./useOwnerProjects"

// export default function ProjectTable(){
//     const {isLoading, projects} = useOwnerProjects()
//     if(isLoading) return <Loading />
//     if(!projects.length) return <Empty resourceName="پروژه" />
//     return(
//         <div className="bg-secondary-0 overflow-x-auto">
//             <table>
//                 <thead>
//                     <tr className="title-row">
//                         <th>#</th>
//                         <th>عنوان پروژه</th>
//                         <th>دسته بندی</th>
//                         <th>بودجه</th>
//                         <th>ددلاین</th>
//                         <th>تگ ها</th>
//                         <th>فریلنسر</th>
//                         <th>وضعیت</th>
//                         <th>عملیات</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {projects.map((project, index)=>(
//                         <tr key={project._id}>
//                             <td>{index + 1}</td>
//                             <td>{TruncateText(project.title , 30)}</td>
//                             <td>{project.category.title}</td>
//                             <td>{toPersianNumbersWithComma(project.budget)}</td>
//                             <td>{toLocalDateShort(project.deadline)}</td>
//                             {/* <td>{project.tags.join("-")}</td> */}
//                             <td>
//                                 <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
//                                     {project.tags.map((tag) => (
//                                         <span className="badge badge--secondary" key={tag}>{tag}</span>
//                                     ))}
//                                 </div>
//                             </td>
//                             <td>{project.freelancer?.name || "-"}</td>
//                             <td>
//                                 {project.status === "OPEN" ? (
//                                     <span className="badge badge--success">باز</span>
//                                 ):(
//                                     <span className="badge badge--danger">بسته</span>
//                                 )}
//                             </td>
//                             <td></td>
//                         </tr>
                        
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }