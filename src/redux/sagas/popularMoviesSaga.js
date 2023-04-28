import { put, call, takeLatest } from 'redux-saga/effects';
import {
  fetchPopularMoviesFailure,
  fetchPopularMoviesSuccess,
} from '../actions/popularMoviesActions';
import { TMDB_BASE_URL } from '../../utils/constants';

function* fetchPopularMovies() {
  try {
    const response = yield call(
      fetch,
      `${TMDB_BASE_URL}/movie/popular?api_key=${
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
