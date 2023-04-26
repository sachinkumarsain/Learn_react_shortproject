import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Row() {
    const img_full_path="https://image.tmdb.org/t/p/original"

    // const[movie,setMovies]=useState([]);
    useEffect(()=>{
        axios.get(props.endpoint)
        .then((result)=>{
            console.log(result.data)
        })

    },[])

  return (
    <>
    <div></div>
    </>
  )
}

export default Row