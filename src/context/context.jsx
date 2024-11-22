import React, { createContext, useState, useContext, useEffect } from 'react';

export const MovieListContext = createContext();

export const MovieListProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const [watchLater, setWatchLater] = useState(() => {
        const savedWatchLater = localStorage.getItem('watchLater');
        return savedWatchLater ? JSON.parse(savedWatchLater) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('watchLater', JSON.stringify(watchLater));
    }, [watchLater]);

    const toggleFavorite = (movie) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((f) => f.id === movie.id)) {
                return prevFavorites.filter((f) => f.id !== movie.id);
            } else {
                return [...prevFavorites, movie];
            }
        });
    };

    const toggleSaveForLater = (movie) => {
        setWatchLater((prevWatchLater) => {
            if (prevWatchLater.some((w) => w.id === movie.id)) {  
                return prevWatchLater.filter((w) => w.id !== movie.id);
            } else {
                return [...prevWatchLater, movie];
            }
        });
    };

    return (
        <MovieListContext.Provider value={{ favorites, watchLater, toggleFavorite, toggleSaveForLater }}>
            {children}
        </MovieListContext.Provider>
    );
};

export const useMovieList = () => {
    return useContext(MovieListContext);
};
