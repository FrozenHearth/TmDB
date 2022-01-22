import "../styles/search.scss";
import SearchIcon from "../assets/icons/Search.svg";

export const SearchBar = () => {
  return (
    <div className="tmdb__search">
      <div className="tmdb__search--container">
        <div className="tmdb__search--icon">
          <img src={SearchIcon} alt="search" />
        </div>
        <input type="text" placeholder="Search Movies" />
      </div>
    </div>
  );
};
