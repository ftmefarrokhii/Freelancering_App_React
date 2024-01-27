import useProjects from "../../hooks/useProjects";
import useUsers from "../../hooks/useUsers";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";

export default function DashboardLayout(){
    const {isLoading : isLoadingProjects , projects} = useProjects()
    const {isLoading : isLoadingProposals , proposals } = useProposals()
    const {isLoading  : isLoadingUsers , users} = useUsers()
    if(isLoadingProjects || isLoadingProposals || isLoadingUsers) return <Loading />
    return(
        <>
            <DashboardHeader />
            <Stats projects={projects.length} proposals={proposals.length} users={users.length}/>

        </>
    )
    
}