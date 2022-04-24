import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header/Header'
import FeaturedProjects from '../components/Projects/FeaturedProjects'
import { getAbout, getAchievements, getFeaturedProjects, } from '../services'
import { ScrollToTop } from 'react-to-top'

import styles from '../styles/Home.module.css'
import Contact from '../components/Contact'
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'

export default function Home() {
  
  return (
    <div className={styles.home}>
      <Head>
        <title>Srinjoy Ray</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header/>
      <About  />
      <FeaturedProjects />
      <Achievements />
      <Contact/>
      <Footer/>
      <ScrollToTop symbol='↑' symbolSize={25} symbolColor='var(--light-text)' strokeEmptyColor='var(--dark-text)' strokeFillColor='var(--light-text)'	 bgColor='var(--light-background)' />
    </div>
  )
}