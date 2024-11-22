import React from "react";
import MovieCard from "./movieCard";
import "./movieListStyle.css"

const MovieList=({movies})=>{
    return(
        <div className="movie-list">
            {movies.map((movie) => 
                <div className="image-container" key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            )}
        </div>
    )
}
export default MovieList