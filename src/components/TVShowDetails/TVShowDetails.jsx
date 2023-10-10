import { Ratings } from "../Ratings/Ratings";
import style from "./style.module.css";

export function TVShowDetails({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={style.title}>{tvShow.name}</div>
      <div className={style.rating__container}>
        <Ratings rating={rating} />
        <div className={style.rating}>{rating}/5</div>
      </div>
      <div className={style.overview}>{tvShow.overview}</div>
    </div>
  );
}
