import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import popularMoviesReducer from './popularMoviesReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  popularMovies: popularMoviesReducer,
});

export default rootReducer;
