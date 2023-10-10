import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import style from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();

    if (populars.length > 0) {
      setCurrentTVShow(populars[3]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log("***", currentTVShow);
  return (
    <div
      className={style.main__container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,1)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>
          </div>

          <div className="col-sm-12 col-md-4">
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>
      <div className={style.tv__show__details}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={style.recommendations}>Recommendations</div>
    </div>
  );
}
