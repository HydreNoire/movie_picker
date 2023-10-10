import { API_KEY_PARAM, BASE_URL } from "../config";

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await fetch(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        const movies = await response.json();

        // console.log(movies.results);
        return movies.results;
    }
}