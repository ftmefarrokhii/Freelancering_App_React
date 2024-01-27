import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

export default function ProposalsTable(){
    const {isLoading , proposals} = useProposals()
    if(isLoading) return <Loading />
   
    return(
        <>
        <div className="flex justify-between items-center mb-8">
            {!proposals.length ? <Empty resourceName=" پروپوزال " /> : <h1>پروپوزال های شما</h1>}
        </div>
        { proposals.length ? (

        
        <Table>
            <Table.Header>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>
            </Table.Header>
            <Table.Body>
                {proposals.map((proposal, index)=>(
                    <ProposalRow proposal={proposal} index={index} key={proposal._id}/> 
                ))}
            </Table.Body>

        </Table>
        ) : ""
        }
        </>
        
                
               
                    
               
          
    )

}