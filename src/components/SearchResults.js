import { imageURL } from "../config/urls";
import defaultAvatar from "../assets/icons/defaultAvatar.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../redux/slices/movieSlice";

export const SearchResults = ({ results = [] }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function onMovieSelect(id) {
    navigate(`/movies/${id}`);
    dispatch(fetchMovie(id));
  }
  return (
    <div className="tmdb__search--dropdown font-semibold">
      <ul>
        {results.map((item, key) => (
          <li onClick={() => onMovieSelect(item.id)} key={key}>
            <a>{item?.title}</a>
            <div className="image__container">
              <img
                width="40"
                height="40"
                src={
                  item.backdrop_path
                    ? `${imageURL + item.backdrop_path}`
                    : item.poster_path
                    ? `${imageURL + item.poster_path}`
                    : defaultAvatar
                }
                alt={item.title}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
