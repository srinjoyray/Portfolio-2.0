import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


import styles from '../../styles/ProjectItem.module.css';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectItem = ({project}) => {
    return (
        <div className={styles.item} >
            <div className={styles.image}>
                <img src={project.image.url} width='100%' />
            </div>
            <div className={styles.body}>
                <div className={styles.titleBar}>
                    <span className={styles.title}>
                        {project.title}
                    </span>
                    <span className={styles.links}>
                        <a href={project.github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={project.live} target="_blank">
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </span>
                </div>
                <div className={styles.technology}>
                    {
                        project.technology.map((tech) => 
                            <span className={styles.tech}>{tech}</span>
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
