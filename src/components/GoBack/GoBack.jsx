import { Link } from "react-router-dom";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import css from "./GoBack.module.css";

export default function GoBack({ to, children }) {
  return (
    <Link to={to}>
      <PiArrowFatLinesLeftFill size="14" className={css.icon} />
      {children}
    </Link>
  );
}
