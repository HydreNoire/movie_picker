import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import style from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.jpg";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationsList, setRecommendationsList] = useState([]);

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();

    if (populars.length > 0) {
      setCurrentTVShow(populars[2]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);

    if (recommendations.length > 0) {
      setRecommendationsList(recommendations.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  // console.log("***", recommendationsList);
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
            <Logo
              image={logo}
              title="AzardWatch"
              subtitle="A chance to find something to watch tonight"
            />
          </div>

          <div className="col-sm-12 col-md-4">
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>
      <div className={style.tv__show__details}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={style.recommendations}>
        {recommendationsList && recommendationsList.length > 0 && (
          <TVShowList
            tvShowList={recommendationsList}
            onClickItem={setCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}
