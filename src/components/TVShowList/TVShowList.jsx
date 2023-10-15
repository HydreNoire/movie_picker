import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import style from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className={style.title}>You may also like</div>
      <div className={style.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={style.tv__show__list__item}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </>
  );
}
