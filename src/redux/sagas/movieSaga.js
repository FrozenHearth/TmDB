import { put, call, takeLatest } from 'redux-saga/effects';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from '../actions/movieActions';

function* fetchMovies(action) {
  console.log('action', action);
  try {
    const response = yield call(
      fetch,
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&query=${action.payload}`
    );
    const data = yield response.json();
    console.log('data', data);
    yield put(fetchMoviesSuccess(data.results));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* watchFetchMovies() {
  yield takeLatest('movies/fetchMovies', fetchMovies);
}
