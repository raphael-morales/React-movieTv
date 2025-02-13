import s from './TvShowListItem.module.css';
import {SMALL_IMG_COVER_BASE_URL} from "../../api/config";


export function TvShowListItem({onItemClick, recommendation}) {

    function handleClickRecommendation() {
        onItemClick(recommendation);
    }

    return (
        <div className={s.container} onClick={handleClickRecommendation}>
            <img className={s.img} src={SMALL_IMG_COVER_BASE_URL + recommendation.backdrop_path} alt=""/>
            <span className={s.title}>{recommendation.name ? recommendation.name : recommendation.title}</span>
        </div>
    )
}