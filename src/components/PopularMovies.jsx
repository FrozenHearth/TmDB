import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/actions/popularMoviesActions';
import tw from 'tailwind-styled-components';
import { formatDate } from '../utils/formatDate';
import CardSkeleton from './Skeletons/CardSkeleton';
import { TMDB_IMAGE_URL } from '../utils/constants';

const HeaderText = tw.h1`
text-white items-center flex gap-3 font-bold 
md:font-bold text-xl md:text-2xl
`;

const CardWrapper = tw.div`
grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6 mt-8`;

const Card = tw.div`
border rounded-lg shadow bg-gray-800 border-transparent overflow-hidden
`;

const CardTitle = tw.h1`
text-sky-500 font-bold text-lg sm:text-xl
`;

const CardBody = tw.div`
p-4
`;

const CardSubtitle = tw.h2`
text-slate-300 text-sm sm:text-base my-2 font-semibold
`;

const CardDescription = tw.p`
text-slate-400 text-xs sm:text-sm mt-6 mb-2 font-semibold line-clamp-3
`;

const Loading = tw.div`
text-slate-400
py-4
flex
gap-4
items-center
justify-center
`;

const LazyFallbackImageForMovies = lazy(() =>
  import('./Fallbacks/FallbackImageForMovies')
);

export default function PopularMovies() {
  const dispatch = useDispatch();
  const { loading, popularMovies, error } = useSelector(
    (state) => state.popularMovies
  );

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  let content;

  if (loading) {
    content = (
      <CardWrapper>
        {[...Array(9)].map((e, i) => (
          <CardSkeleton key={i} />
        ))}
      </CardWrapper>
    );
  } else if (popularMovies.length > 0) {
    content = (
      <CardWrapper>
        {popularMovies
          .filter((movie) => !movie.adult)
          .map((item) => (
            <Card key={item.id}>
              <div className="rounded">
                {item.backdrop_path ? (
                  <img
                    src={`${TMDB_IMAGE_URL}/${item.backdrop_path}`}
                    alt={item.title}
                    width="300"
                    height="300"
                    className="object-cover w-full"
                  />
                ) : (
                  <Suspense
                    fallback={
                      <Loading>
                        <span>Loading...</span>
                      </Loading>
                    }
                  >
                    <LazyFallbackImageForMovies />
                  </Suspense>
                )}
              </div>
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardSubtitle>{formatDate(item.release_date)}</CardSubtitle>
                <CardDescription>{item.overview}</CardDescription>
              </CardBody>
            </Card>
          ))}
      </CardWrapper>
    );
  } else if (error) {
    content = <span>Error</span>;
  } else {
    content = <span>No results found...</span>;
  }

  return (
    <>
      <HeaderText>Popular Movies</HeaderText>
      {content}
    </>
  );
}
