import ProjectHeader from "../features/project/ProjectHeader";
import ProjectTable from "../features/project/ProjectTable";
import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";

export default function Project(){
    const {isLoading, project} = useProject()
    console.log("project",project);
    if(isLoading) return <Loading />
    return(
        <div>
            <ProjectHeader project={project}/>
            <ProjectTable project={project}/>
        </div>
    )
}