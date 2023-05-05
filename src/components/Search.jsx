import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';
import { fetchMovies } from '../redux/actions/movieActions';

const Dropdown = lazy(() => import('./Dropdown'));

const SearchIconWrapper = tw.div`
  absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none
`;

const SearchIcon = tw.svg`
  w-5 h-5 text-gray-400
`;

const Input = tw.input`
  block w-full p-4 pl-10 text-base border rounded-3xl 
  ${(props) =>
    props.$hasSubmittedInput
      ? 'rounded-br-none rounded-bl-none'
      : 'rounded-br-3xl rounded-bl-3xl'}
  bg-gray-800 border-gray-600 placeholder-gray-400 text-white 
`;

const Loading = tw.div`
text-slate-400
py-4
flex
gap-4
items-center
justify-center
`;

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSubmittedInput, setHasSubmittedInput] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setHasSubmittedInput(true);
    // Fetch results when form is submitted - i.e. Enter button is pressed
    dispatch(fetchMovies(searchTerm));
  };

  useEffect(() => {
    if (!searchTerm) {
      setHasSubmittedInput(false);
    }
  }, [searchTerm]);

  return (
    <form onSubmit={handleFormSubmit}>
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
          autoComplete="off"
          aria-label="Search for a movie"
          $hasSubmittedInput={hasSubmittedInput} // State being passed to tw-styled-components
        />
        {searchTerm !== '' && hasSubmittedInput ? (
          <Suspense
            fallback={
              <Loading>
                <span>Loading...</span>
              </Loading>
            }
          >
            <Dropdown movies={movies} />
          </Suspense>
        ) : null}
      </div>
    </form>
  );
}
