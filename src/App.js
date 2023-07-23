import React, { useEffect, useState } from 'react'
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com?apikey=2de4b597"

const movie1 = {
    "Title": "Shrek",
    "Year": "2001",
    "imdbID": "tt0126029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
const App = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovie("Shrek")

    }, [])
    return (
        <div className="app">

            <h1>Movie World</h1>
            <div className='search'>
                <input
                    placeholder='Search for movie...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovie(search)} />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}

        </div>
    )
}
export default App;
// 2de4b597