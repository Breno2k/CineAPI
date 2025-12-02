// react
import { useState, useEffect } from "react"

// Components
import MovieCard from "../components/MovieCard";

// Dados da API
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

// CSS
import styles from "./Home.module.css"


const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [carouselMovies, setCarouselMovies] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json();
        setTopMovies(data.results)

        // Seleciona 5 filmes aleatórios para o carrossel
        const shuffled = [...data.results].sort(() => 0.5 - Math.random());
        setCarouselMovies(shuffled.slice(0, 5));
    };

    // Carrossel automático a cada 7 segundos
    useEffect(() => {
        if (carouselMovies.length === 0) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselMovies.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [carouselMovies]);

    // isto vai chamar a API toda vez que a página for carregada
    useEffect(() => {
        const topRatedMovies = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedMovies)
    }, [])



    return (
        <div className={styles.container}>
            {/* Carrossel */}
            {carouselMovies.length > 0 && (
                <div className={styles.carousel}>
                    {carouselMovies.map((movie, index) => (
                        <div
                            key={movie.id}
                            className={`${styles.carousel_slide} ${index === currentSlide ? styles.active : ''}`}
                        >
                            <img
                                src={imageUrl + movie.backdrop_path}
                                alt={movie.title}
                                className={styles.carousel_image}
                            />
                            <div className={styles.carousel_content}>
                                <h1 className={styles.carousel_title}>{movie.title}</h1>
                                <p className={styles.carousel_overview}>{movie.overview}</p>
                            </div>
                        </div>
                    ))}

                    {/* Indicadores */}
                    <div className={styles.carousel_indicators}>
                        {carouselMovies.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.carousel_dot} ${index === currentSlide ? styles.active : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Seção de filmes */}
            <div className={styles.movies_section}>
                <h2 className={styles.title}>The best Movies</h2>
                <div className={styles.movies_container}>
                    {topMovies.length === 0 && <p>Loading...</p>}
                    {topMovies.length > 0 && topMovies.map((movie, index) => (
                        <MovieCard key={movie.id} movie={movie} style={{ '--index': index }} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home