// CSS
import styles from "./Movie.module.css"

// React
import { useEffect } from "react"

// React router
import { useParams } from "react-router-dom"

// Icons
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs"

// Hooks
import { useSelectMovies } from "../hooks/useSelectMovies"

// Dados da API
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Movie = () => {

    const { id } = useParams()

    const { movies, selectMovies } = useSelectMovies()

    useEffect(() => {

        const movieUrl = `${moviesURL}${id}?${apiKey}`

        selectMovies(movieUrl)
    }, [])

    const formatCurrency = (number) => {

        if (!number || number === 0) return "—";

        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    return (
        <div className={styles.movie_page}>
            {movies && (
                <div className={styles.movie_card}>
                    {/* Lado esquerdo - Imagem */}
                    <div className={styles.movie_poster}>
                        <img src={imageUrl + movies.poster_path} alt={movies.title} />
                    </div>

                    {/* Lado direito - Informações */}
                    <div className={styles.movie_content}>
                        <h2>{movies.title}</h2>
                        {movies.tagline && <p className="tagline">{movies.tagline}</p>}

                        <div className={styles.info_container}>
                            <div className={styles.info}>
                                <BsWallet2 />
                                <div>
                                    <h3>Budget</h3>
                                    <p>{formatCurrency(movies.budget)}</p>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <BsGraphUp />
                                <div>
                                    <h3>Revenue</h3>
                                    <p>{formatCurrency(movies.revenue)}</p>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <BsHourglassSplit />
                                <div>
                                    <h3>Duration</h3>
                                    <p>{movies.runtime} min</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.description}>
                            <h3><BsFillFileEarmarkTextFill /> Description</h3>
                            <p>{movies.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Movie