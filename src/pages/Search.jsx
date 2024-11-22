import { useState, useEffect } from "react";
import "./searchStyle.css"
import { useSearchParams } from "react-router-dom";
import MovieCard from "../elements/movieCard";

const searchURl = import.meta.env.VITE_SEARCH;
const apikey = import.meta.env.VITE_KEY;

const Search = () => {
  const [searchParams]= useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");
{/*  da pra por no doc de movie services, mas não vai ser reutilizado
  e tem que ver se ta saindo certo*/}
  useEffect(() => {
    const getSearchedMovies = async (url) => {
      try {
        const res = await fetch(url);
        console.log("Resposta da API:", res); 
        
        if (!res.ok) throw new Error("Erro na busca de filmes");

        const data = await res.json();
        console.log(data);
        const validMovies = data.results.filter(movie => movie.title|| movie.name);
        setMovies(validMovies);

      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    if (query) {
      const keywordSearchUrl = `${searchURl}?api_key=${apikey}&query=${query}`;
      getSearchedMovies(keywordSearchUrl);
    }
  }, [query]);

  return (
    <div className="search-container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-c">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard className="searchcard" key={movie.id} movie={movie} />)
        ) : (
          <p>Nenhum filme encontrado para esta pesquisa.</p>
        )}
      </div>
    </div>
  )}

export default Search;
