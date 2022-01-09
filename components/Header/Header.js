import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faWindowClose} from '@fortawesome/free-solid-svg-icons'


import styles from '../../styles/Header.module.css';
import ThemeToggle from './ThemeToggle';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Link from 'next/link';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const width = useWindowDimensions()?.width;
    
    return (
        <div className={styles.navbar}>
            <div className={styles.name}>
                <Link href="/">
                    Srinjoy Ray
                </Link>
            </div>
            <div className={styles.navMenu}>
                {
                    (toggleMenu || width>800) && (
                        <ul className={styles.navLink}>
                            <li>
                                <Link href="/#about">
                                    <span className={styles.anchor} onClick={()=>setToggleMenu(false)}>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <span className={styles.anchor} onClick={()=>setToggleMenu(false)}>Projects</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#achievements">
                                    <span className={styles.anchor} onClick={()=>setToggleMenu(false)}>Achievements</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs">
                                    <span className={styles.anchor} onClick={()=>setToggleMenu(false)}>Blogs</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact">
                                    <span className={styles.anchor} onClick={()=>setToggleMenu(false)}>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    )
                }
            </div>
            <div className={styles.themeToggle}>
                <ThemeToggle />
            </div>  
            {
                toggleMenu ? 
                <div className={styles.toggleMenu}>
                    <FontAwesomeIcon icon={faWindowClose} className={styles.icons} onClick={()=>setToggleMenu(!toggleMenu)}/>
                </div>
                :
                <div className={styles.toggleMenu}>
                    <FontAwesomeIcon icon={faBars}  className={styles.icons} onClick={()=>setToggleMenu(!toggleMenu)}/>
                </div>
            }
        </div>
    )
}

export default Header
