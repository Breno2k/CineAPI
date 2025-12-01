// react
import { useState, useEffect } from "react"

// Dados da API
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


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
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies_container">
                {topMovies === 0 && <p>Carregando...</p>}
                {topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}
            </div>

        </div>
    )
}

export default Home