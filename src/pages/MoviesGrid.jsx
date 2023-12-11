import { MovieCard } from "../components/MovieCard"
import "./MoviesGrid.css"
import { useEffect, useState } from "react"
import {get} from "../Services/Apicalls";


export function MoviesGrid() {
   
   const [movies, setMovies] = useState ([]);
   
   
   useEffect(() => {
     get(`/discover/movie?api_key=ea370ff11e967f7500ea0c91fdae24e9`)
        .then(data => {
         setMovies(data.results);
      });
   }, []);
     return (
        <ul className="moviesGrid">
           {movies.map((movie) => {
            <MovieCard key={movie.id} movie={movie} />
           })} 
        </ul>
     )

}