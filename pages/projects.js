import { ScrollToTop } from "react-to-top";
import ProjectItem from "../components/Projects/ProjectItem";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { getProjects } from "../services";
import styles from '../styles/Projects.module.css'
import Projects from "../components/Projects/Projects";
import Head from "next/head";

const projects = () => {

    return (
        <div className={styles.projects}>
            <Head>
                <title>Srinjoy Ray</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header/>
            <div className={styles.body}>
                <div className={styles.heading}>
                    Projects
                </div>
                <div className={styles.projectItem}>
                    <Projects/>
                </div>
            </div>
            <Footer/>
            <ScrollToTop symbol='↑' symbolSize={25} symbolColor='var(--light-text)' strokeEmptyColor='var(--dark-text)' strokeFillColor='var(--light-text)'	 bgColor='var(--light-background)' />
        </div>
    )
}

export default projects


// export async function getStaticProps(context) {
//     const projects = await getProjects();
//     return {
//       props: { projects },
//     };
// }