import './global.css'
import s from './style.module.css';
import {TvShowApi} from "./api/tv-show";
import {useState, useEffect} from "react";
import {BACKDROP_BASE_URL} from "./api/config";
import {TvShowDetail} from "./components/tvShowDetails/TvShowDetail";
import {Logo} from "./components/logo/Logo";
import logo from './assets/images/logo.png';
import {TvShowList} from "./components/tvShowList/TvShowList";
import {SearchMovie} from "./components/searchMovie/SearchMovie";

function App() {

    const [currentTvShow, setCurrentTvShow] = useState();
    const [tvShowRecommendations, setTvShowRecommendations] = useState();
    const [categorySelected, setCategorySelected] = useState("tv");
    const [searchText, setSearchText] = useState("");


    async function getTvShowPopular() {
        const tvShowPopular = await TvShowApi.fetchPopular(categorySelected);
        if (tvShowPopular.length > 0) {
            setCurrentTvShow(tvShowPopular[0]);
        }
    }

    async function getTvShowRecommandation(TvShowId) {
        switch (categorySelected) {
            case "tv":
                const tvShowRecommendationsSerie = await TvShowApi.fetchRecommendationsById(categorySelected,TvShowId);
                if (tvShowRecommendationsSerie.length > 0) {
                    setTvShowRecommendations(tvShowRecommendationsSerie.slice(0,10));
                }
                break;
            case "movie":
                const tvShowRecommendationsMovie = await TvShowApi.fetchRecommendationsById(categorySelected,TvShowId);
                if (tvShowRecommendationsMovie.length > 0) {
                    setTvShowRecommendations(tvShowRecommendationsMovie.slice(0, 10))
                }
                break;
        }
    }

    async function getTvShowSearch() {
        const tvShowSearch = await TvShowApi.fetchMovieByName(categorySelected,searchText)
        if (tvShowSearch.length > 0) {
            setCurrentTvShow(tvShowSearch[0]);
            getTvShowRecommandation(tvShowSearch[0].id)
        }
    }

    //UseEffet
    useEffect(() => {
        getTvShowPopular()
    }, [])

    useEffect(() => {
        if (currentTvShow) {
            getTvShowRecommandation(currentTvShow.id)
        }
    }, [currentTvShow])

    useEffect(() => {
        if (searchText.trim().length > 0) {
            getTvShowSearch()
        }else{
            getTvShowPopular()
        }

    }, [categorySelected])

    //Update useState
    function updateCurrentTvShow(currentTvShow) {
        setCurrentTvShow(currentTvShow)
        setSearchText("")
    }

    function updateCategory(category) {
        setCategorySelected(category)

    }

    function updatebySearchMovie(name){
        if (name.length > 0) {
            getTvShowSearch(searchText)
        }else{
            getTvShowPopular()
        }
        setSearchText(name)
    }


    return (
        <div className={s.main_container}
             style={{
                 background:
                     currentTvShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), 
                     url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover` : "black"
             }}>

            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo logo={logo} title={'Movies TV'} subtitle={'All yours movies in the same site!!!'}/>
                    </div>
                    <div className="col-md-12 col-lg-4 d-flex align-items-center">
                        { categorySelected && <SearchMovie valueSearch={searchText} onChangeItem={updatebySearchMovie} onChangeCategory={updateCategory}
                                      category={categorySelected}/>}
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                { currentTvShow && <TvShowDetail tvShow={currentTvShow}/>}
            </div>
            <div className={s.recommentations}>
                { tvShowRecommendations && <TvShowList onItemClick={updateCurrentTvShow} recommendations={tvShowRecommendations}/>}
            </div>
        </div>
    );
}

export default App;
