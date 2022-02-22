import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import popularMoviesReucer from "./slices/popularMoviesSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
    movies: popularMoviesReucer,
  },
});
