import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import Rating from "../components/Rating";
import { imageURL } from "../config/urls";
import { fetchMovie } from "../redux/slices/movieSlice";
import "../styles/movieDetails.scss";

export default function MovieDetails() {
  const movie = useSelector((state) => state.movie.movie);
  const loading = useSelector((state) => state.movie.loading);
  const hasErrors = useSelector((state) => state.movie.hasErrors);
  const dispatch = useDispatch();
  const params = useParams();
  const hasData = Boolean(Object.keys(movie).length);

  console.log("movie", movie);

  useEffect(() => {
    if (hasData && movie.id == params.id) {
      return;
    }
    // Make API call only if no data in store
    dispatch(fetchMovie(params.id));
  }, [hasData]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {hasErrors && <div>Errors...</div>}
      {!loading && !hasErrors && (
        <>
          <DetailsCard
            imgSrc={movie?.poster_path && `${imageURL + movie?.poster_path}`}
            title={movie?.title}
          />
          <div className="details__body">
            <h2 className="details__body--tagline font-bold">
              {movie?.tagline}
            </h2>
            <p className="details__body--overview">{movie?.overview}</p>
            <Rating ratingText={movie?.vote_average} />
            <div className="details__body--labels">
              <p className="label">Release date</p>
              <p className="label__description">{movie?.release_date}</p>
            </div>
            <div className="details__body--labels">
              <p className="label">Runtime</p>
              <p className="label__description">{movie?.runtime} minutes</p>
            </div>
            <div className="details__body--labels">
              <p className="label">Genres</p>
              <p className="genre__wrapper">
                {movie?.genres?.map((genre) => (
                  <span key={genre.id} className="label__description--genre">
                    {genre.name}
                  </span>
                ))}
              </p>
            </div>
            <div className="footer__poster">
              <img
                src={movie?.poster_path && `${imageURL + movie?.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
