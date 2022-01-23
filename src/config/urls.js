import { API_KEY } from "../api/apiKey";
const commonImageURL = "https://image.tmdb.org/t/p";

// Common URL
export const movieURL = "https://api.themoviedb.org/3/movie";
export const searchURL = "https://api.themoviedb.org/3/search/movie";

export const smImageURL = `${commonImageURL}/w300/`;
export const imageURL = `${commonImageURL}/w500/`;
export const fullImage = `${commonImageURL}/original/`;

export const popularMovies = `${movieURL}/popular?api_key=${API_KEY}`;
