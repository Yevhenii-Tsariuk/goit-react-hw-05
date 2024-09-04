import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ list }) {
  const location = useLocation();

  return (
    <ul className={css.item}>
      {list.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              &#8226; {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
