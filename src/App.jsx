import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import style from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.jpg";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

console.log("***", process.env.REACT_APP_API_KEY_PARAM);
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationsList, setRecommendationsList] = useState([]);

  async function fetchPopulars() {
    try {
      const populars = await TVShowAPI.fetchPopulars();

      if (populars.length > 0) {
        setCurrentTVShow(populars[2]);
      }
    } catch (e) {
      alert("An error occurred while retrieving popular shows.");
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);

      if (recommendations.length > 0) {
        setRecommendationsList(recommendations.slice(0, 10));
      }
    } catch (e) {
      alert("We haven't managed to find the shows recommended for the series.");
    }
  }

  async function searchTVShow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      } else {
        alert(
          "We can't find your show, you maybe misspell it or it doesn't exist."
        );
      }
    } catch (e) {
      alert("An error occurred while searching for the show.");
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
            <SearchBar onSubmit={searchTVShow} />
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
