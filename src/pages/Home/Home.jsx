import { useState, useEffect } from "react";
import MovieList from "../../elements/movieList";
import "./conf-pag.css";
import {
  getMostWatchedMovies,
  getTopRatedMovies
} from "../../services/movieServices.jsx";
import { useMovieList } from "../../context/context";

const Home = () => {
  const [mostWatchedMovies, setMostWatchedMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const { favorites, watchLater } = useMovieList(); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const TopRatedMovies = await getTopRatedMovies();
        setTopMovies(TopRatedMovies);

        const MostWatchedMovies = await getMostWatchedMovies();
        setMostWatchedMovies(MostWatchedMovies);

      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container-home">
      {/* Seção de filmes mais assistidos */}
      <h2 className="section-title">Top mais assistidos</h2>
      <MovieList movies={mostWatchedMovies} />

      {/* Seção de filmes mais bem avaliados */}
      <h2 className="section-title">Top melhores avaliados</h2>
      <MovieList movies={topMovies} />

      {/* Seção de filmes favoritos */}
      {favorites.length > 0 && (
        <>
          <h2 className="section-title">Favoritos</h2>
          <MovieList movies={favorites} />
        </>
      )}

      {/* Seção de filmes para assistir mais tarde */}
      {watchLater.length > 0 && (
        <>
          <h2 className="section-title">Assistir mais tarde</h2>
          <MovieList movies={watchLater} />
        </>
      )}
    </div>
  );
};

export default Home;
