import { MovieCard } from "../components/MovieCard"
import "./MoviesGrid.css"


export function MoviesGrid() {
     return (
        <ul className="moviesGrid">
           {movies.map((movie) => {
            <MovieCard key={movie.id} movie={movie} />
           })} 
        </ul>
     )

}