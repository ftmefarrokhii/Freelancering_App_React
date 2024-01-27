import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

export default function ToggleProjectStatus({project}){
    const {status} = project;
    const { isTogglingProject , toggleProjectStatus } = useToggleProjectStatus()
    
    const toggleHandler = () =>{
        const projectStatus = status === "OPEN" ? "CLOSED" : "OPEN"
        toggleProjectStatus({id : project._id , data : { status : projectStatus } } )
    }
    return(
        <div className="w-[5rem]">
            {isTogglingProject ?( <Loading width={50} height={20}/>) : (
                <Toggle label={status === "OPEN" ? "باز" : "بسته"}
                         enabled={status === "OPEN" ? true : false} 
                         toggleHandler={toggleHandler}
                />
            )}
        </div>
        
    )
}