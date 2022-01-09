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

export default function Home({about,projects,achievements}) {
 
  return (
    <div className={styles.home}>
      

      <Header/>
      <About about={about} />
      <FeaturedProjects projects={projects} />
      <Achievements achievements={achievements} />
      <Contact/>
      <Footer/>
      <ScrollToTop symbol='↑' symbolSize={25} symbolColor='var(--light-text)' strokeEmptyColor='var(--dark-text)' strokeFillColor='var(--light-text)'	 bgColor='var(--light-background)' />
    </div>
  )
}

export async function getStaticProps() {
  const about = await getAbout();
  const projects = await getFeaturedProjects();
  const achievements = await getAchievements();
  return {
    props: { about , projects , achievements },
  };
}