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
        <div>
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <h3> <BsWallet2 /> budget:</h3>
                    <p>{formatCurrency(movie.budget)}</p>
                    <h3> <BsGraphUp /> Recipe:</h3>
                    <p>{formatCurrency(movie.revenue)}</p>
                    <h3> <BsHourglassSplit /> Duration:</h3>
                    <p>{movie.runtime}</p>
                    <h3> <BsFillFileEarmarkTextFill /> Description:</h3>
                    <p>{movie.overview}</p>
                </>
            )}
        </div>
    )
}

export default Movie