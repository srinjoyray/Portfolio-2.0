import Head from 'next/head';
import { ScrollToTop } from "react-to-top";

import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import styles from '../styles/Blogs.module.css';
import { Blogs } from '../components/Blogs/Blogs';

const blogs = () => {
    
    

    return (
        <div className={styles.blogs}>
            <Head>
                <title>Srinjoy Ray</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header/>
            <div className={styles.body}>
                <div className={styles.heading}>
                    Blogs
                </div>
                <div className={styles.blogItem}>
                    <Blogs />
                </div>
                
            
            </div>
            <Footer/>
            <ScrollToTop symbol='↑' symbolSize={25} symbolColor='var(--light-text)' strokeEmptyColor='var(--dark-text)' strokeFillColor='var(--light-text)'	 bgColor='var(--light-background)' />
        </div>
    )
}

export default blogs
