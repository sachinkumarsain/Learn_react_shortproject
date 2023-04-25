import React, { useState } from 'react'
import axios from 'axios'

function Search_movies() {
    const [input, setInput] = useState('')
    const [movies, setMovies] = useState([])
    const img_full_path = "https://image.tmdb.org/t/p/original"

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b79c10e73f72411f046239d322c58bfb&language=en-US&query=${input}&page=1&include_adult=false`).then((result) => {
            console.log(result.data.results)
            setMovies(result.data.results)
        })

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search Here' value={input} onChange={handleChange}></input>
                <button>Search</button>
            </form>
            <div>
                {movies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <img src={img_full_path + movie.poster_path} />
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </div>

                    )
                })}

            </div>
        </>
    )
}

export default Search_movies