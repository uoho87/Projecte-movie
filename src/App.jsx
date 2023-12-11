import "./App.css";
import Movies from "./pages/MoviesGrid.jsx";
import Movie from "./pages/MovieDetail.jsx";
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
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:movie.id" element={<Movie />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
