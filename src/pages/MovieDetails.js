import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../redux/slices/movieSlice";

export default function MovieDetails() {
  const movie = useSelector((state) => state.movie.movie);
  const loading = useSelector((state) => state.movie.loading);
  const hasErrors = useSelector((state) => state.movie.hasErrors);
  const dispatch = useDispatch();
  const params = useParams();
  const hasData = Boolean(Object.keys(movie).length);

  useEffect(() => {
    console.log("has Data", hasData);
    if (hasData) {
      return;
    }
    // Make API call only if no data in store
    dispatch(fetchMovie(params.id));
  }, [hasData]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {hasErrors && <div>Errors...</div>}
      <div>This is movie title: {movie.original_title}</div>
    </div>
  );
}
