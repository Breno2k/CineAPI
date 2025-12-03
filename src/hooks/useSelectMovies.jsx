import { useState } from "react";

export function useSelectMovies() {
    const [movies, setMovies] = useState([]);

    const selectMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    };

    return { movies, selectMovies };
}