import { all } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSaga';
import { watchFetchPopularMovies } from './popularMoviesSaga';

export default function* rootSaga() {
  yield all([watchFetchMovies(), watchFetchPopularMovies()]);
}
