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
        return response.data.results;
    }

    static async fetchTvShowDetailsById(category,id) {
        const response = await axios.get(`${BASE_URL}${category}/${id}${API_KEY_PARAM}`);
        if(response.data.length === 0){
            return [];
        }else{
            return response.data;
        }
    }

    //Obtenir la liste des acteurs d'une série.
    static async fetchTVShowCast(category, tvShowId) {
        const response = await axios.get(`${BASE_URL}${category}/${tvShowId}/credits${API_KEY_PARAM}`);
        return response.data.cast;
    }
}
