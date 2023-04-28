/* eslint-disable react/prop-types */

import tw from 'tailwind-styled-components';
import { TMDB_IMAGE_URL } from '../utils/constants';
import FallbackAvatarDropdown from './Fallbacks/FallbackAvatarDropdown';

const ListWrapper = tw.div`
  w-full
  absolute
bg-gray-700
 z-[9999]
  max-h-[300px]
  shadow-md
  rounded-3xl
  rounded-tl-none
  rounded-tr-none
  overflow-auto
`;

const ListItem = tw.li`
  text-slate-400
  p-4
  flex
  hover:bg-slate-100
  hover:text-slate-600
  hover:font-semibold
  hover:cursor-pointer
  gap-4
  items-center
`;

const NoResultsFound = tw.div`
  text-slate-400
  py-4
  flex
  gap-4
  items-center
  justify-center
`;

const Loading = tw(NoResultsFound)``;

const Error = tw(NoResultsFound)``;

const ListItemAvatar = tw.img`
  object-cover
  rounded-full
  h-[36px]
`;

const ListItemText = tw.span`
text-base
`;

export default function Dropdown({ movies }) {
  const { loading, data, error } = movies;
  let content;
  if (loading) {
    content = (
      <Loading>
        <span>Loading...</span>
      </Loading>
    );
  } else if (data.length > 0) {
    content = (
      <ul>
        {data.map((movie) => (
          <ListItem key={movie.id}>
            <div>
              {movie.poster_path ? (
                <ListItemAvatar
                  src={`${TMDB_IMAGE_URL}/${movie.poster_path}`}
                  alt={movie.title}
                  width="36"
                  height="36"
                />
              ) : (
                FallbackAvatarDropdown()
              )}
            </div>
            <ListItemText>{movie.title}</ListItemText>
          </ListItem>
        ))}
      </ul>
    );
  } else if (error) {
    content = (
      <Error>
        <span>Error: {error.message}</span>
      </Error>
    );
  } else {
    content = (
      <NoResultsFound>
        <span>No results found...</span>
      </NoResultsFound>
    );
  }

  return <ListWrapper>{content}</ListWrapper>;
}
