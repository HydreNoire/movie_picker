import { API_KEY_PARAM, BASE_URL } from "../config";

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await fetch(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        const shows = await response.json();

        return shows.results;
    }

    static async fetchRecommendations(tvShowId) {
        const response = await fetch(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
        const recommendationShows = await response.json();

        return recommendationShows.results;
    }

    static async fetchByTitle(title) {
        const response = await fetch(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
        const searchingShow = await response.json();

        return searchingShow.results;
    }
}