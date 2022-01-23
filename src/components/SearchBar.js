import "../styles/search.scss";
import SearchIcon from "../assets/icons/Search.svg";
import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { searchAPI } from "../api/apiCalls";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getSearch = async () => {
    setLoading(true);
    try {
      const searchResults = await searchAPI(searchTerm);
      setData(searchResults.results);
    } catch (err) {
      setError(err.status_message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };
  const clearSearch = () => {
    setSearchTerm("");
  };
  useEffect(() => {
    if (searchTerm) {
      getSearch();
    } else {
      clearSearch();
    }
  }, [searchTerm]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(handleSearch, 300),
    [searchTerm]
  );
  return (
    <div className="tmdb__search">
      <div className="tmdb__search--container">
        <div className="tmdb__search--icon">
          <img src={SearchIcon} alt="search" />
        </div>
        <input
          className="font-regular"
          onChange={debouncedChangeHandler}
          type="text"
          placeholder="Search Movies"
        />
      </div>
      {data && !loading && searchTerm && <SearchResults results={data} />}
    </div>
  );
};
