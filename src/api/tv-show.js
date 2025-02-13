import axios from "axios";
import {API_KEY_PARAM, BASE_URL} from "./config";

export class TvShowApi {

    static async fetchPopular(category) {
        const response = await axios.get(`${BASE_URL}${category}/popular${API_KEY_PARAM}`);
        return response.data.results;
    }

    static async fetchRecommendationsById(category,id) {
        try{
            const response = await axios.get(`${BASE_URL}${category}/${id}/recommendations${API_KEY_PARAM}`);
            return response.data.results;

        }catch(error){
            return [];
        }
    }

    static async fetchMovieByName(category,title){
        const response = await axios.get(`${BASE_URL}search/${category}${API_KEY_PARAM}&query=${title}`);
        return response.data.results;
    }

    static async fetchTVShowVideos(category,tvShowId) {
        const response = await axios.get(`${BASE_URL}${category}/${tvShowId}/videos${API_KEY_PARAM}`);
        console.log(response.data.results)
        return response.data.results;
    }
}
