import { put, call, takeLatest } from 'redux-saga/effects';
import {
  fetchPopularMoviesFailure,
  fetchPopularMoviesSuccess,
} from '../actions/popularMoviesActions';

function* fetchPopularMovies() {
  try {
    const response = yield call(
      fetch,
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    const data = yield response.json();
    yield put(fetchPopularMoviesSuccess(data.results));
  } catch (error) {
    yield put(fetchPopularMoviesFailure(error));
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest('movies/fetchPopularMovies', fetchPopularMovies);
}
