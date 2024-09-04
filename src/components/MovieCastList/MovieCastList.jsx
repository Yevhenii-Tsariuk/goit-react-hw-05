import { imageUrl } from "../../moviedb-api";
import css from "./MovieCastList.module.css";

export default function MovieCastList({ cast }) {
  return (
    <ul className={css.list}>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <li key={id} className={css.item}>
            <img width="190" src={imageUrl + profile_path} alt={name}></img>
            <h3 className={css.actorName}>{name}</h3>
            <p className={css.actorCharacter}>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
