import { API_KEY } from "../api/apiKey";

// Common URL
export const movieURL = "https://api.themoviedb.org/3/movie";

export const popularMovies = `${movieURL}/popular?api_key=${API_KEY}`;
