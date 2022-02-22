import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { popularMovies } from "../../config/urls";

export const popularMovieSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    hasErrors: false,
    popularMovies: [],
  },
  reducers: {
    getPopularMovies: (state) => {
      state.loading = true;
    },
    getPopularMoviesSuccess: (state, { payload }) => {
      state.popularMovies = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPopularMoviesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getPopularMovies,
  getPopularMoviesSuccess,
  getPopularMoviesFailure,
} = popularMovieSlice.actions;

export default popularMovieSlice.reducer;

export function fetchPopularMovies() {
  return async (dispatch) => {
    dispatch(getPopularMovies());
    try {
      const result = await axios.get(`${popularMovies}&language=en-US`);
      const data = await result.data;

      dispatch(getPopularMoviesSuccess(data));
    } catch (error) {
      dispatch(getPopularMoviesFailure());
    }
  };
}
