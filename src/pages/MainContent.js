import { SearchBar } from "../components/SearchBar";
import "../styles/mainContent.scss";

export const MainContent = () => {
  return (
    <main className="tmdb__main">
      <section className="tmdb__main--section">
        <h1>Welcome to TMDB.</h1>
        <h2>
          Thousands of English language movies & people to discover. Explore
          now.
        </h2>
      </section>
      <section className="tmdb__main--section">
        <SearchBar />
      </section>
    </main>
  );
};
