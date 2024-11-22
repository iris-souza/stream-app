import React, { useState } from "react";
import Modal from "react-modal";
import MovieModal from "./movieDetail";
import { useMovieList } from "../context/context";
import "./card-style.css";

const imagesURL = import.meta.env.VITE_IMAGE;

const MovieCard = ({ movie,  showLink = true }) => {
    const { toggleFavorite, toggleSaveForLater, favorites, watchLater } = useMovieList();
    const defaultImage = 'caminho/para/imagem/default.jpg'; // Substitua pelo caminho da sua imagem padrão
    const imageUrl = movie.poster_path ? imagesURL + movie.poster_path : defaultImage;

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const isFavorited = favorites.some((fav) => fav.id === movie.id);
    const isSavedForLater = watchLater.some((watch) => watch.id === movie.id);

    return (
        <div className="movieCard">
            {showLink ? (
                <img
                    className="imagem-filme"
                    src={imageUrl}
                    alt={movie.title}
                    onClick={openModal}
                />
            ) : (
                <span>{movie.title}</span>
            )}


            <Modal 
                isOpen={isOpen} 
                onRequestClose={closeModal} 
                ariaHideApp={false}
                style={{
                    overlay: {
                        backgroundColor: 'transparent',
                    },
                    content: {
                        outline: 'none',
                        border: 'none',
                        padding: 0,
                        background: 'none'
                    }
                }}
            >
                <MovieModal
                    movie={movie}
                    onClose={closeModal}
                    onToggleFavorite={toggleFavorite}
                    onToggleSaveForLater={toggleSaveForLater}
                    isFavorited={isFavorited}
                    isSavedForLater={isSavedForLater}
                    style={{outline: 0}}
                />
            </Modal>
        </div>
    );
};

export default MovieCard;
