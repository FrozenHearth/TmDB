/* eslint-disable react/prop-types */

import tw from 'tailwind-styled-components';

const ListWrapper = tw.div`
w-full
absolute
p-4
bg-slate-800
max-h-[300px]
overflow-auto
`;

const ListItem = tw.li`
text-slate-400
hover:text-white
hover:cursor-pointer
py-4
flex
gap-4
align-center
`;

const ListItemAvatar = tw.img`
object-cover
rounded-full
h-[36px]
`;

export default function Dropdown({ movies }) {
  console.log('movies', movies);
  return (
    <ListWrapper>
      {movies.loading && <p>Loading...</p>}
      {movies.error && <p>{movies.error}</p>}
      {movies.data.length > 0 ? (
        <ul>
          {movies.data.map((movie) => (
            <ListItem key={movie.id}>
              <div>
                <ListItemAvatar
                  loading="lazy"
                  decoding="async"
                  src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  width="36"
                  height="36"
                />
              </div>
              <span>{movie.title}</span>
            </ListItem>
          ))}
        </ul>
      ) : null}
    </ListWrapper>
  );
}
