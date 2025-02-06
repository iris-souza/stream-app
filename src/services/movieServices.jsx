const moviesURL = import.meta.env.VITE_API.trim();
const apiKey = import.meta.env.VITE_KEY.trim();

const buildURL = (endpoint, params) => {
  const url = new URL(`${moviesURL}${endpoint}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return url;
};

const fetchMovies = async (endpoint, params = {}) => {
  try {
    const url = buildURL(endpoint, { api_key: apiKey, ...params });
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Erro ao buscar filmes: ${error}`);
    return [];
  }
};

export const getMoviesByGenre = (genreIds) => {
  const genreQuery = genreIds.length ? { with_genres: genreIds.join(",") } : {};
  return fetchMovies('/discover/movie', genreQuery);
};

export const getMostWatchedMovies = () => {
  return fetchMovies('/movie/popular');
};

export const getTopRatedMovies = () => {
  return fetchMovies('/movie/top_rated');
};

export const searchMovies = (query) => {
  return fetchMovies('/search/movie', { query });
};
