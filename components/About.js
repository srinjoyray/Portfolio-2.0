import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText,faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub, faReadme} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import Link from 'next/link'

import HomeImage from '../assets/Home.png'
import styles from '../styles/About.module.css';

export default function About({about}) {
    const {tagline,bio} = about;
    
    return (
        <div id="about" className={styles.about}>
            <div className={styles.aboutContent}>
                <p className={styles.name}>Hi, I'm Srinjoy Ray</p>
                
                <span className={styles.tagline}> {tagline} </span>

                <div className={styles.bioGroup}>
                { 
                    bio.map((item,index) => 
                    <p className={styles.bio} key={index}> {item} </p> 
                    )
                }
                </div>
                
                <div className={styles.aboutLinks}>
                    <a href="https://www.linkedin.com/in/srinjoy-ray-874b031b6" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className={styles.aboutIcon} />
                    </a>
                    <a href="https://github.com/srinjoyray" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className={styles.aboutIcon}/>
                    </a>
                    <a href="mailto:srinjoyray123@gmail.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.aboutIcon}/>
                    </a>
                </div>

                <div className={styles.aboutButtons}>
                    <Link href='/projects'>
                        <button className={styles.button}>
                            <FontAwesomeIcon icon={faLaptopCode} className={styles.buttonIcon}/> See my work
                        </button>
                    </Link>
                    <Link href='/blogs'>
                        <button className={styles.button}>
                            <FontAwesomeIcon icon={faReadme} className={styles.buttonIcon}/>  Read my blogs
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.aboutImage}>
                <Image
                    src={HomeImage}
                    alt="Picture of the author"
                    width={400}
                    height={380}
                    className={styles.image}
                />
            </div>
        </div>
    )
}



