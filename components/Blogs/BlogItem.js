import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/BlogItem.module.css';

const BlogItem = ({blog}) => {
  return (
    <div className={styles.item} >
            <div className={styles.imageDiv}>
                <img src={blog.featuredImage.url} className={styles.image} alt="Picture" />
            </div>
            <div className={styles.body}>
                <div className={styles.titleBar}>
                    <span className={styles.title}>
                        {blog.title}
                    </span>
                    
                </div>
                
                <div className={styles.excerpt}>
                    {blog.excerpt}
                </div>
                <div className={styles.links}>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                        <span>
                            Read the enitre blog
                            <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </span>
                    </a>    
                </div>
            </div>
        </div>
  )
}

export default BlogItem