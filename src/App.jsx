import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">CineAPI</Link>
        </h2>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search"><Search /></Link>
      </nav>
      <h2>CineAPI</h2>
      <Outlet />
    </div>
  )
}

export default App
