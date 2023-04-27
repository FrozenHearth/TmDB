import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../actions/movieActions';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
