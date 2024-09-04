import { useEffect, useState } from "react";
import { fetchMovie } from "../moviedb-api";
import MovieList from "../components/MovieList/MovieList";
import css from "./HomePage.module.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function moviesOfDay() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchMovie(
          "https://api.themoviedb.org/3/trending/movie/day"
        );
        setMovies(res.data.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    moviesOfDay();
  }, []);

  return (
    <>
      <h2 className={css.subtitle}>Trending today</h2>
      {error && (
        <p>Something went wrong! Please wait a few seconds and try again.</p>
      )}
      {loading && <p>Loading...</p>}
      {movies && <MovieList list={movies} />}
    </>
  );
}
