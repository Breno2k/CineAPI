import { useState } from "react";

export function useSelectMovie() {
    const [movie, setMovie] = useState([]);

    const selectMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    };

    return { movie, selectMovie };
}