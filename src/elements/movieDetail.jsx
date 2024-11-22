import React from 'react';
import './modal.css';

const MovieModal = ({ movie, onClose, onToggleFavorite, onToggleSaveForLater, isFavorited, isSavedForLater }) => {
    const imagesURL = import.meta.env.VITE_IMAGE;
    const defaultImage = 'caminho/para/imagem/default.jpg'; // Substitua pelo caminho da sua imagem padrão
    const imageUrl = movie.poster_path ? imagesURL + movie.poster_path : defaultImage;

    return (
        <div className='modal-overlay' style={{outline: 0}}>
            <div className="movieDetail">
                <div className='up-part'>
                    <h2 className='title-movie-modal'>{movie.title}</h2>
                    <div className='up-right'>
                        <p className='nota-modal'>Nota: {movie.vote_average}</p>
                        <button className='close-modal' onClick={onClose}>X</button>
                    </div>
                </div>
                <div className='box-middle'>
                    <img src={imageUrl} alt={movie.title} />
                    <div className='middle-right'>
                        <h2 className='title-modal'>Descrição:</h2>
                        <p className='text-modal'>{movie.overview}</p>
                        <p className='text-modal ano'>Ano: {movie.release_date.substring(0, 4)}</p>
                    </div>
                </div>
                <div className='box-bottom '>
                    <button 
                        className={`btn-favorite ${isFavorited ? 'favorited' : 'not-favorited'}`} 
                        onClick={() => onToggleFavorite(movie)}
                    >
                        S2
                    </button>

                    <button 
                        className={`btn-save ${isSavedForLater ? 'saved' : 'not-saved'}`} 
                        onClick={() => onToggleSaveForLater(movie)}
                    >
                        {isSavedForLater ? 'Vou Assistir Mais Tarde' : 'Salvar para Assistir Mais Tarde'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
