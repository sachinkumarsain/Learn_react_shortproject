import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import "./banner.css";


function Banner() {
    const [banner, setbanner] = useState([]);
    const img_full_path = "https://image.tmdb.org/t/p/original";


    useEffect(() => {
        axios.get(requests.fetchNetflixOriginals)
            .then((result) => {
                setbanner(result.data.results[Math.floor(Math.random() * result.data.results.length)])
            })
    }, [])
    console.log(banner)
    return (
        <>
            <div
                className='banner'
                style={{ backgroundImage: "url(" + img_full_path + banner.backdrop_path + ")" }}
            >
                <div className='banner_container'>
                <h1>{banner.title||banner.name||banner.original_name}</h1>
               <div>
               <a className='play'>Play</a>
                <a className='play'>My List</a>
               </div>
                <p>{banner.overview}</p>
                </div>

            </div>

        </>
    )
}

export default Banner