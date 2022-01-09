import ProjectItem from "./ProjectItem";
import styles from '../../styles/FeaturedProjects.module.css';
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFeaturedProjects } from "../../services";

const FeaturedProjects = () => {
    const [projects,setProjects] = useState();
    const fetchProjects = async() =>{
        setProjects(await getFeaturedProjects());
    }
    useEffect(() => {
        fetchProjects();
    }, [])

    return (
        <div className={styles.projects} id="projects">
            <div className={styles.heading}>
                Featured Projects
            </div>
            <div className={styles.projectItem}>
                {
                    projects?.map((project,index) => <ProjectItem key={index} project={project} /> )
                }
            </div>
            <Link href="/projects" passHref={true}>
                <div className={styles.seeMore}>
                    See all projects <FontAwesomeIcon icon={faLongArrowAltRight} />
                </div>
            </Link>
        </div>
    )
}

export default FeaturedProjects
