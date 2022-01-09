import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import styles from '../styles/Blogs.module.css';

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
                <div className={styles.comingSoon}>
                    Coming Soon
                </div>                
            </div>
            <Footer/>
        </div>
    )
}

export default blogs
