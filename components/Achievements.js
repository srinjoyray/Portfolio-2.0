import { faExternalLinkAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { getAchievements } from '../services';

import styles from '../styles/Achievement.module.css';

const Achievements = () => {
    const [achievements,setAchievements] = useState();
    const fetchAchievements = async() =>{
        setAchievements(await getAchievements());
    }
    useEffect(() => {
        fetchAchievements();
    }, [])

    return (
        <div id="achievements" className={styles.achievements}>
            <div className={styles.heading}>
                Achievements
            </div>
            <VerticalTimeline
                layout='2-columns'
                lineColor='var(--light-text)'
                className={styles.timeline}
                animate={false}
                children={null}
            >
                {
                    achievements?.map((achievement,index)=>
                        <VerticalTimelineElement
                            key={index}
                            date={achievement.date}
                            dateClassName={styles.date}
                            iconClassName={styles.iconStyle}
                            icon={<FontAwesomeIcon icon={faStar} className={styles.star}/>}
                            className={styles.item}
                            contentStyle={{ background: `var(--light-background)`, color: `var(--light-text)` }}
                            contentArrowStyle={{ borderRight: `7px solid  var(--light-background)` }}
                        >
                            <h3>
                                {achievement.title}
                                {
                                    achievement.url ? 
                                    <a href={achievement.url} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.link}/>
                                    </a>
                                    :
                                    <></>
                                }
                            </h3>
                            <p>
                                {achievement.description}
                            </p>
                            
                        </VerticalTimelineElement>   
                    )
                }
           </VerticalTimeline>
        </div>
    )
}

export default Achievements
