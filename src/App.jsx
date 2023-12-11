import "./App.css";
import { movies } from "../pages/MoviesGrid.jsx";
import { movie } from "../pages/MovieDetail.jsx";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <header>
          <nav>
            <Link to="/">Movies</Link>
          </nav>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Navigate to={movies} />} />
            <Route path="/movie/:movie.id" element={<Navigate to={movie} />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
