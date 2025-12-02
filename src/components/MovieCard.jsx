// react router
import { Link } from "react-router-dom";

// icons
import { FaStar } from "react-icons/fa";

// CSS
import styles from "./MovieCard.module.css"

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    return (
        <div className={styles.movie_card}>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {formatCurrency(movie.vote_average)}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
        </div>
    )
}

export default MovieCard