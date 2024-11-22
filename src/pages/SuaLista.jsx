import React, { useContext } from 'react';
import { useMovieList } from "../context/context";
import MovieCard from '../elements/movieCard.jsx';

const WatchLater = () => {
    const { watchLater, toggleSaveForLater } = useMovieList();

    return (
        <div>
            <h1 style={{ padding: '20px' }}>Assistir Mais Tarde</h1>
            {watchLater.length > 0 ? (
                <div className="movie-list">
                    {watchLater.map((movie) => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie} 
                            onToggleSaveForLater={toggleSaveForLater}
                            isSavedForLater={true}
                        />
                    ))}
                </div>
            ) : (
                <p style={{ padding: '20px' }}>Nenhum filme na lista de assistir mais tarde.</p>
            )}
        </div>
    );
};

export default WatchLater;
