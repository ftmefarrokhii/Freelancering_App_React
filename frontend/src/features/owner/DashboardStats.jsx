import { HiCollection, HiOutlineViewGrid ,HiCurrencyDollar} from "react-icons/hi";
import Stat from '../../ui/Stat';

export default function DashboardStats({projects}){
    const numOfProjects = projects.length
    // const numOfAcceptedProjects = projects.filter((project) => project.status === 2 ).length 
    const numOfAcceptedProjects = projects.filter((project) => project.freelancer ).length // ???
    const numOfPrposals = projects.reduce(( acc , curr ) => { curr.proposals.length + acc } , 0 )
    // curr hamoon project hast k length proposal haye har project ro hesab mikne
    console.log(numOfPrposals);
    return(
        <div className="grid grid-cols-3 gap-8 mt-6">
            <Stat icon={<HiOutlineViewGrid className="w-20 h-20"/>} 
                  title="پروژه ها" 
                  value={numOfProjects}
                  color="primary"
            />
            <Stat icon={<HiCurrencyDollar className="w-20 h-20"/>} 
                  title="پروژه های واگذار شده" 
                  value={numOfAcceptedProjects}
                  color="green"
            />
            <Stat icon={<HiCollection className="w-20 h-20"/>} 
                  title="درخواست ها"
                  value={numOfPrposals}
                  color="blue"
            />    
        </div>
    )
}