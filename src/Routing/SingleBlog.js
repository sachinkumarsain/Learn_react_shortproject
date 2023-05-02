import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


function SingleBlog() {

    const { id } = useParams()
    const Navigate=useNavigate();
    const [singlePost, setSinglePost] = useState({})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then((result) => {
            console.log(result.data)
            setSinglePost(result.data)
        })
        .catch((Err)=>{
            return Navigate("*");
        })
    }, [])

    return (
        <>
            <div>SingleBlog</div>
            <h3>{singlePost.title}</h3>
            <p>{singlePost.body}</p>
        </>
    )
}

export default SingleBlog