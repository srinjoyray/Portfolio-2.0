import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router'

import styles from '../../styles/ProjectItem.module.css';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectItem = ({project}) => {

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.item} >
            <div className={styles.image}>
                <img src={project.image.url} width='100%' alt="Picture" />
            </div>
            <div className={styles.body}>
                <div className={styles.titleBar}>
                    <span className={styles.title}>
                        {project.title}
                    </span>
                    <span className={styles.links}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </span>
                </div>
                <div className={styles.technology}>
                    {
                        project.technology.map((tech,index) => 
                            <span className={styles.tech} key={index}>{tech}</span>
                        )
                    }
                </div>
                
                <div className={styles.description}>
                    {project.description}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
