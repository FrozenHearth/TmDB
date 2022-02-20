import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import "../styles/mainContent.scss";
import MovieDetails from "./MovieDetails";
import Movies from "./Movies";
import People from "./People";

export const MainContent = () => {
  return (
    <main className="tmdb__main">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="people" element={<People />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
    </main>
  );
};
