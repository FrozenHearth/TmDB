export const FETCH_MOVIES = 'movies/fetchMovies';
export const FETCH_MOVIES_SUCCESS = 'movies/fetchMoviesSuccess';
export const FETCH_MOVIES_FAILURE = 'movies/fetchMoviesFailure';
export const CLEAR_MOVIES = 'movies/clearMovies';

export function fetchMovies(searchTerm) {
  return {
    type: FETCH_MOVIES,
    payload: searchTerm,
  };
}

export function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
}

export function fetchMoviesFailure(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
}

export function clearMovies() {
  return {
    type: CLEAR_MOVIES,
    payload: '',
  };
}
