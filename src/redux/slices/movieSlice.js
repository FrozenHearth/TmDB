import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../api/apiKey";
import { movieURL } from "../../config/urls";

export const movieSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    hasErrors: false,
    movie: {},
  },
  reducers: {
    getMovieDetails: (state) => {
      state.loading = true;
    },
    getMovieDetailsSuccess: (state, { payload }) => {
      state.movie = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getMovieDetailsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getMovieDetails,
  getMovieDetailsSuccess,
  getMovieDetailsFailure,
} = movieSlice.actions;

export default movieSlice.reducer;

export function fetchMovie(id) {
  return async (dispatch) => {
    dispatch(getMovieDetails());
    try {
      const result = await axios.get(
        `${movieURL}/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await result.data;

      dispatch(getMovieDetailsSuccess(data));
    } catch (error) {
      dispatch(getMovieDetailsFailure());
    }
  };
}
