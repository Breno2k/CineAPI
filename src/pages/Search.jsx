// react
import { useState, useEffect } from "react"

// React Router
import { useSearchParams } from "react-router-dom"

// Components
import MovieCard from "../components/MovieCard"

// CSS
import styles from './Movie.module.css'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


const Search = () => {

    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json();

        setMovies(data.results)
    };

    // isto vai chamar a API toda vez que a página for carregada
    useEffect(() => {

        if (!query) return

        const searchWithQueryUrl = `${searchURL}?${apiKey}&query=${query}`

        getSearchMovies(searchWithQueryUrl)

    }, [query])


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Results for: <span className={styles.query_text}>{query}</span>
            </h2>
            <div className={styles.movies_container}>
                {movies.length === 0 && <p>Loading...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Search