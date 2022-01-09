import { useEffect, useState } from "react"
import { getProjects } from "../../services";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    const [projects,setProjects] = useState();
    const fetchProjects = async() =>{
        setProjects(await getProjects());
    }
    useEffect(() => {
        fetchProjects();
    }, [])
    
    return (
        <>
            {
                projects?.map((project,index) => <ProjectItem key={index} project={project} /> )
            }
        </>
    )
}

export default Projects
