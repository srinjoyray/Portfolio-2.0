import React from 'react'
import { useEffect, useState } from "react"
import { getBlogs } from '../../services';
import BlogItem from './BlogItem';

export const Blogs = () => {
    const [blogs,setBlogs] = useState();
    const fetchBlogs = async() =>{
        setBlogs(await getBlogs());
    }
    useEffect(() => {
        fetchBlogs();
    }, [])
    return (
        <>
            {
                blogs?.map((blog,index)=> <BlogItem blog={blog} key={index} /> )
            }
        </>
    )
}
