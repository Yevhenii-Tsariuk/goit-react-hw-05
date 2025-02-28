import css from "./MovieReviewList.module.css";

export default function MovieReviewList({ reviews }) {
  return (
    <>
      {reviews.length === 0 && (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id} className={css.item}>
              <h3 className={css.subtitle}>Author: {author}</h3>
              <p className={css.text}>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
