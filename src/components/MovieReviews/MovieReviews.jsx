import { useEffect, useState } from "react";
import { fetchMovie } from "../../moviedb-api";
import { useParams } from "react-router-dom";
import MovieReviewList from "../MovieReviewList/MovieReviewList";

export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchMovie(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`
        );
        setReviews(res.data.results);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {error && (
        <p>Something went wrong! Please wait a few seconds and try again.</p>
      )}
      {loading && <p> Loading...</p>}
      {reviews && <MovieReviewList reviews={reviews} />}
    </>
  );
}
