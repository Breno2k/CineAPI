// react
import { useState, useEffect } from "react"

// React Router
import { useSearchParams } from "react-router-dom"

// Components
import MovieCard from "../components/MovieCard"

// Hooks
import { useSelectMovies } from "../hooks/useSelectMovies"

// CSS
import styles from "./Search.module.css"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


const Search = () => {

    const [searchParams] = useSearchParams()

    const { movies, selectMovies } = useSelectMovies()

    const query = searchParams.get("q")

    // isto vai chamar a API toda vez que a página for carregada
    useEffect(() => {

        if (!query) return

        const searchWithQueryUrl = `${searchURL}?${apiKey}&query=${query}`

        selectMovies(searchWithQueryUrl)

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