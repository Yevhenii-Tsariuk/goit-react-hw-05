import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { fetchMovie } from "../moviedb-api";
import MovieDetailsContent from "../components/MovieDetailsContent/MovieDetailsContent";
import css from "./MovieDetailsPage.module.css";
import GoBack from "../components/GoBack/GoBack";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getmovieDetails() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchMovie(
          `https://api.themoviedb.org/3/movie/${movieId}`
        );
        setMovieDetails(res.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getmovieDetails();
  }, [movieId]);

  return (
    <div className={css.container}>
      <GoBack to={backLinkHref.current} className={css.button}>
        Go back
      </GoBack>
      {error && (
        <p>Something went wrong! Please wait a few seconds and try again.</p>
      )}
      {loading && <p>Loading...</p>}
      {movieDetails && <MovieDetailsContent details={movieDetails} />}
      <p className={css.text}>Additional information</p>
      <ul className={css.list}>
        <li>
          <Link to="cast">&#8226; Cast</Link>
        </li>
        <li>
          <Link to="reviews">&#8226; Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading details...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
