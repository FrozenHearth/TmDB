import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';
import { clearMovies, fetchMovies } from '../redux/actions/movieActions';
import Dropdown from './Dropdown';

const SearchIconWrapper = tw.div`
  absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none
`;

const SearchIcon = tw.svg`
  w-5 h-5 text-gray-400
`;

const Input = tw.input`
  block w-full p-4 pl-10 text-base border rounded-lg
  bg-gray-700 border-gray-600 placeholder-gray-400 text-white 
`;

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  console.log('novies', movies);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(clearMovies());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchMovies(searchTerm));
  };

  return (
    <form className="relative" onSubmit={handleFormSubmit}>
      <div className="relative">
        <SearchIconWrapper>
          <SearchIcon
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </SearchIcon>
        </SearchIconWrapper>
        <Input
          type="search"
          id="default-search"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        {movies.data.length > 0 && searchTerm !== '' ? (
          <Dropdown movies={movies} />
        ) : null}
      </div>
    </form>
  );
}
