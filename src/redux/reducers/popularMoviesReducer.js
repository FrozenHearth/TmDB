import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from '../actions/popularMoviesActions';

const initialState = {
  loading: false,
  popularMovies: [],
  error: null,
};

export default function popularMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return { ...state, loading: true };
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return { ...state, loading: false, popularMovies: action.payload };
    case FETCH_POPULAR_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
