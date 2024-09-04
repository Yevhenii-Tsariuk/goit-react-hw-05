import { imageUrl } from "../../moviedb-api";
import css from "./MovieDetailsContent.module.css";

export default function MovieDetailsPage({
  details: {
    title,
    release_date,
    genres,
    backdrop_path,
    vote_average,
    overview,
  },
}) {
  return (
    <>
      <div className={css.wrapper}>
        <img
          src={imageUrl + backdrop_path}
          alt={title}
          width="270"
          height="360"
          className={css.image}
        ></img>
        <div className={css.contentWrapper}>
          <h3 className={css.subtitle}>
            {title} ({release_date.slice(0, 4)})
          </h3>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h4 className={css.subtitle}>Overview</h4>
          <p>{overview}</p>
          <h4 className={css.subtitle}>Genres</h4>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
    </>
  );
}
