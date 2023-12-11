import { useParams } from "react-router-dom";
import "./MovieDetail.css"
import { useEffect, useState } from "react";
import {get} from "../Services/Apicalls";

export function MovieDetail() {
const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
const { movieId } = useParams();
const [movie, setMovie] = useState(null);
useEffect(() => {
     get("/movie/" + movieId).then(data => {
      setMovie(data);
    })
  }, [movieId]);

    return <div className="detailsContainer">
        <img className="col" src={imageUrl} alt={movie.title} />
        <div className="col">
            <p><strong>Title: </strong> {movie.title}</p>
            <p><strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
            <p><strong>Overview: </strong> {movie.overview}</p>
        </div>
    </div>
}