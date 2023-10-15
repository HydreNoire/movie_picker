import { SMALL_IMG_BASE_URL } from "../../config";
import style from "./style.module.css";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={() => onClick(tvShow)} className={style.container}>
      <img
        src={SMALL_IMG_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={style.img}
      />
      <div className={style.title}>{tvShow.name}</div>
    </div>
  );
}
