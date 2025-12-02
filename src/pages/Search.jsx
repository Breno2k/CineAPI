// react
import { useState, useEffect } from "react"

// React Router
import { useSearchParams } from "react-router-dom"

// Components
import MovieCard from "../components/MovieCard"

// CSS
import styles from "./Search.module.css"

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
        <div className={styles.search_page}>
            <h1>
                Search results for: <span className={styles.query_text}>{query}</span>
            </h1>
            <div className={styles.search_results}>
                {movies.length === 0 && (
                    <p className={styles.no_results}>No movies found for "{query}"</p>
                )}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div >
    )
}

export default Search