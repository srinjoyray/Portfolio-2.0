import React, { useEffect, useState } from 'react';

import { setTheme } from '../../utils/themes';
import styles from '../../styles/ThemeToggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
    const [togClass, setTogClass] = useState('dark');
    let theme;
    if(typeof window !== "undefined"){
        theme = localStorage.getItem('theme');
    }
    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return (
        <>
            {
                togClass === 'light' ? 
                <FontAwesomeIcon icon={faMoon} onClick={handleOnClick} className={styles.icon} />
                :
                <FontAwesomeIcon icon={faSun} onClick={handleOnClick} className={styles.icon} />
            }
        </>
    )
}

export default ThemeToggle;