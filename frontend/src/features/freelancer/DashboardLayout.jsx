import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import DashboardHeader from '../../ui/DashboardHeader'
import FreelancerStats from "./FreelancerStats";


export default function DashboardLayout(){
    const {proposals , isLoading} = useProposals()
    if(isLoading) return <Loading />
    return(
        <div>
            <DashboardHeader />
            <FreelancerStats proposals={proposals}/>
        </div>
    )
}