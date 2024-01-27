import useProjects from "../../../hooks/useProjects"
import Empty from "../../../ui/Empty"
import Loading from "../../../ui/Loading"
import Table from "../../../ui/Table"
import FreelancerProjectRow from "./FreelancerProjectRow"

export default function FreelancerProjectTable(){
    const {isLoading , projects} = useProjects()

    if(isLoading) return <Loading />
    if(!projects.length) return <Empty resourceName=" پروژه " />
    return(
        <>
        { projects.length ? (
            <Table>
                <Table.Header>
                    <th>#</th>
                    <th>عنوان پروژه</th>
                    
                    <th>بودجه</th>
                    <th>ددلاین</th>
        
                    <th>وضعیت</th>
                    <th>عملیات</th>
                </Table.Header>
                <Table.Body>
                    {projects.map((project, index)=>(
                        <FreelancerProjectRow project={project} index={index} key={index}/> 
                    ))}
                </Table.Body>

            </Table>
            ) : ""
        }
        </>  
    )
}