import { ScrollToTop } from "react-to-top";
import ProjectItem from "../components/FeaturedProjects/ProjectItem";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { getProjects } from "../services";
import styles from '../styles/Projects.module.css'

const projects = ({projects=[]}) => {

    return (
        <div className={styles.projects}>
            <Header/>
            <div className={styles.body}>
                <div className={styles.heading}>
                    Projects
                </div>
                
                <div className={styles.projectItem}>
                    {
                        projects?.map((project,index) => <ProjectItem key={index} project={project} /> )
                    }
                </div>
            </div>
            <Footer/>
            <ScrollToTop symbol='↑' symbolSize={25} symbolColor='var(--light-text)' strokeEmptyColor='var(--dark-text)' strokeFillColor='var(--light-text)'	 bgColor='var(--light-background)' />
        </div>
    )
}

export default projects


export async function getStaticProps(context) {
    const projects = await getProjects();
    return {
      props: { projects },
    };
}