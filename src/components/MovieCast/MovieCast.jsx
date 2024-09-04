import { useEffect, useState } from "react";
import { fetchMovie } from "../../moviedb-api";
import { useParams } from "react-router-dom";
import MovieCastList from "../MovieCastList/MovieCastList";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCredits() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchMovie(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`
        );

        setCast(res.data.cast);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCredits();
  }, [movieId]);

  return (
    <>
      {error && (
        <p>Something went wrong! Please wait a few seconds and try again.</p>
      )}
      {!loading ? cast && <MovieCastList cast={cast} /> : <p>Loading...</p>}
    </>
  );
}
