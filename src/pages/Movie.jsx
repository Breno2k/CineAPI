// CSS
import styles from "./Movie.module.css"

// React
import { useState, useEffect } from "react"

// React router
import { useParams } from "react-router-dom"

// Icons
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs"

// Components
import MovieCard from "../components/MovieCard"

// Dados da API
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Movie = () => {

    const { id } = useParams()


    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {

        const res = await fetch(url)
        const data = await res.json();

        setMovie(data)
    }

    useEffect(() => {

        const movieUrl = `${moviesURL}${id}?${apiKey}`

        getMovie(movieUrl)
    }, [])

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    return (
        <div className={styles.movie_page}>
            {movie && (
                <div className={styles.movie_card}>
                    {/* Lado esquerdo - Imagem */}
                    <div className={styles.movie_poster}>
                        <img src={imageUrl + movie.poster_path} alt={movie.title} />
                    </div>

                    {/* Lado direito - Informações */}
                    <div className={styles.movie_content}>
                        <h2>{movie.title}</h2>
                        {movie.tagline && <p className="tagline">{movie.tagline}</p>}

                        <div className={styles.info_container}>
                            <div className={styles.info}>
                                <BsWallet2 />
                                <div>
                                    <h3>Budget</h3>
                                    <p>{formatCurrency(movie.budget)}</p>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <BsGraphUp />
                                <div>
                                    <h3>Revenue</h3>
                                    <p>{formatCurrency(movie.revenue)}</p>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <BsHourglassSplit />
                                <div>
                                    <h3>Duration</h3>
                                    <p>{movie.runtime} min</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.description}>
                            <h3><BsFillFileEarmarkTextFill /> Description</h3>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Movie