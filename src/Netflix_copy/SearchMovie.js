import React, { useState } from "react";
import axios from "axios";

function SearchMovie() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const img_full_path = "https://image.tmdb.org/t/p/original";

  const resultStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    flexWrap: "wrap",
  };

  const movieStyle = {
    width: "22%",
    height: "400px",
    // margin: "2rem 1rem 20rem",
    margin: "2rem 1rem",
  };

  const imgStyle = {
    width: "80%",
    height: "70%",
  };

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b79c10e73f72411f046239d322c58bfb&language=en-US&query=${input}&page=1&include_adult=false`
      )
      .then((result) => {
        // console.log(result.data.results);
        setMovies(result.data.results);
      });
  }

  return (
    <>
    <h3>Movie Search</h3>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Search here"
          value={input}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <div style={resultStyle}>
        {movies.map((movie, index) => {
          return (
            
            <div key={index} style={movieStyle}>
              <div>
                <img
                  src={img_full_path + movie.poster_path}
                  alt={movie.title || movie.original_title}
                  style={imgStyle}
                />
                <h3>{movie.title || movie.original_title}</h3>
                {/* <p>{movie.overview}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SearchMovie;