import { imageURL } from "../config/urls";
import defaultAvatar from "../assets/icons/defaultAvatar.svg";
import { useNavigate } from "react-router-dom";

export const SearchResults = ({ results = [] }) => {
  const navigate = useNavigate();
  function onMovieSelect(id) {
    navigate(`/movies/${id}`);
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
