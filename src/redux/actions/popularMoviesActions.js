export const FETCH_POPULAR_MOVIES = 'movies/fetchPopularMovies';
export const FETCH_POPULAR_MOVIES_SUCCESS = 'movies/fetchPopularMoviesSuccess';
export const FETCH_POPULAR_MOVIES_FAILURE = 'movies/fetchPopularMoviesFailure';

export function fetchPopularMovies() {
  return {
    type: FETCH_POPULAR_MOVIES,
  };
}

export function fetchPopularMoviesSuccess(payload) {
  return {
    type: FETCH_POPULAR_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchPopularMoviesFailure(error) {
  return {
    type: FETCH_POPULAR_MOVIES_FAILURE,
    payload: error,
  };
}
