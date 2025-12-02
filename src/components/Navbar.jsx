// Router
import { Link, useNavigate } from "react-router-dom"

// Icons
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

// CSS
import styles from './Navbar.module.css'

// React
import { useState } from "react"

const Navbar = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return;

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <nav className={styles.navbar}>
            <h2>
                <Link to="/"><BiCameraMovie /> CineAPI</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Search a movie"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search} />
                <button type="submit"><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}

export default Navbar