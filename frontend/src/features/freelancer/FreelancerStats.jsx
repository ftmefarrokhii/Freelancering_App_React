import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "../../ui/Stat"
import toPersianNumbersWithComma from "../../utils/toPersianNumbersWithComma";

export default function FreelancerStats({proposals }){
    const numOfProposals = proposals.length
    const acceptedProposals = proposals.filter((proposal) => proposal.status === 2 )
    // mikhaym dastmozd hesab konim pas har acceptedproposal price esho jam miknim => total price
    const balance = acceptedProposals.reduce((acc, curr)=> curr.price + acc ,0)
    
    return(
        <div className="grid grid-cols-3 gap-x-8">
            <Stat icon={<HiOutlineViewGrid className="w-20 h-20"/>} 
                  title="درخواست ها" 
                  value={numOfProposals}
                  color="primary"
            />
            <Stat icon={<HiCurrencyDollar className="w-20 h-20"/>} 
                  title="درخواست های تایید شده"
                  value={acceptedProposals.length}
                  color="green"
            />
            <Stat icon={<HiCollection className="w-20 h-20"/>} 
                  title="کیف پول"
                  value={toPersianNumbersWithComma(balance)}
                  color="blue"
            />    
        </div>
    )
}