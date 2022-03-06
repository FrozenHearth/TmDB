import { SearchBar } from "./SearchBar";
import PopularMovies from "./PopularMovies";

export default function Hero() {
  return (
    <>
      <section className="tmdb__main--section">
        <h1 className="hero-header">Welcome to TMDB.</h1>
        <p className="font-bold">
          Thousands of English language movies & people to discover. Explore
          now.
        </p>
      </section>
      <section className="tmdb__main--section">
        <SearchBar />
      </section>
      <section className="tmdb__main--body">
        <PopularMovies />
      </section>
    </>
  );
}
