import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageURL } from "../config/urls";
import { fetchPopularMovies } from "../redux/slices/popularMoviesSlice";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import "../styles/popularMovies.scss";

export default function PopularMovies() {
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const loading = useSelector((state) => state.movies.loading);
  const hasErrors = useSelector((state) => state.movies.hasErrors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasData = Boolean(popularMovies?.results?.length);

  useEffect(() => {
    // dispatch(fetchPopularMovies());
    if (hasData) {
      return;
    }
    // Make API call only if no data in store
    dispatch(fetchPopularMovies());
  }, []);

  function handleClick(id) {
    navigate(`/movies/${id}`);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {hasErrors && <div>Errors...</div>}
      <h2 className="title">Popular Movies</h2>
      <div className="wrapper">
        <div className="flex__wrapper">
          {!loading &&
            !hasErrors &&
            hasData &&
            popularMovies.results.map((movie) => (
              <Card
                onClick={() => handleClick(movie.id)}
                key={movie.id}
                cardImg={
                  movie?.poster_path ? `${imageURL + movie?.poster_path}` : null
                }
                cardTitle={movie?.original_title}
              />
            ))}
        </div>
      </div>
      {/* <div>This is movie title: {movie.original_title}</div> */}
    </>
  );
}
