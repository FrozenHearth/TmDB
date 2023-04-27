/* eslint-disable react/prop-types */

import tw from 'tailwind-styled-components';

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

const Loading = tw.div`
  text-slate-400
  py-4
  flex
  gap-4
  items-center
  justify-center
`;

const ListItemAvatar = tw.img`
  object-cover
  rounded-full
  h-[36px]
`;

const ListItemText = tw.span`
text-base
`;

export default function Dropdown({ movies }) {
  let content;
  if (movies.loading) {
    content = (
      <Loading>
        <span>Loading...</span>
      </Loading>
    );
  } else if (movies.data.length > 0) {
    content = (
      <ul>
        {movies.data.map((movie) => (
          <ListItem key={movie.id}>
            <div>
              <ListItemAvatar
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width="36"
                height="36"
              />
            </div>
            <ListItemText>{movie.title}</ListItemText>
          </ListItem>
        ))}
      </ul>
    );
  } else if (movies.error) {
    content = (
      <NoResultsFound>
        <span>Error: {movies.error.message}</span>
      </NoResultsFound>
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
