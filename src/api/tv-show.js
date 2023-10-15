import { API_KEY_PARAM, BASE_URL } from "../config";

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await fetch(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        const shows = await response.json();

        // console.log(movies.results);
        return shows.results;
    }

    static async fetchRecommendations(tvShowId) {
        const response = await fetch(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
        const recommendationShows = await response.json();

        // console.log(recommendationShows.results);
        return recommendationShows.results;
    }
}