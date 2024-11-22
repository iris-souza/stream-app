import React from 'react';
import MovieCard from '../elements/movieCard.jsx';
import { useMovieList } from '../context/context.jsx';

const Favorites = () => {
    const { favorites, toggleFavorite } = useMovieList();

    return (
        <div>
            <h1 style={{ padding: '20px' }}>Favoritos</h1>
            {favorites.length > 0 ? (
                <div className="movie-list">
                    {favorites.map((movie) => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie} 
                            onToggleFavorite={toggleFavorite} 
                            isFavorited={true}
                        />
                    ))}
                </div>
            ) : (
                <p style={{ padding: '20px' }}>Nenhum filme favorito encontrado.</p>
            )}
        </div>
    );
};

export default Favorites;
