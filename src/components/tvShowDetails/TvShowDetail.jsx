import s from './TvShowDetail.module.css';
import {FiveStarRating} from "../rating/FiveStarRating";

export function TvShowDetail({tvShow}) {
    const rating = Number.parseFloat(tvShow.vote_average / 2).toFixed(2);

    return (
        <div>
            <div className={s.title}>
                { tvShow.name ? tvShow.name : tvShow.title}
            </div>
            <div className={s.rating}>
                <FiveStarRating rating={rating}/>
            </div>
            <div className={s.overview}>
                {tvShow.overview}
            </div>
        </div>
    )

}