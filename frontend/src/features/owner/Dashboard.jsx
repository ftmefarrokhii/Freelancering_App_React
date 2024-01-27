import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from '../../ui/DashboardHeader'
import DashboardStats from "./DashboardStats";

export default function Dashboard(){
    const {isLoading, projects} = useOwnerProjects()
    if(isLoading) return <Loading />
    return (
        <div>
            <DashboardHeader />
            <DashboardStats projects={projects}/>
        </div>
    )

}