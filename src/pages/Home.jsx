// react
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";

// Dados da API
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// CSS
import styles from "./Movie.module.css"


const Home = () => {

    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json();

        setTopMovies(data.results)
    };

    // isto vai chamar a API toda vez que a página for carregada
    useEffect(() => {

        const topRatedMovies = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedMovies)

    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>The best Movies:</h2>
            <div className={styles.movies_container}>
                {topMovies.length === 0 && <p>Loading...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>

        </div>
    )
}

export default Home