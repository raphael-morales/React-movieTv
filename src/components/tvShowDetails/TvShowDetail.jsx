import s from './TvShowDetail.module.css';
import {FiveStarRating} from "../rating/FiveStarRating";

export function TvShowDetail({tvShow , tvShowDetail, tvShowCredits}) {
    const rating = Number.parseFloat(tvShow.vote_average / 2).toFixed(2);
    var genres = "";
    var castings = "";

    tvShowDetail.genres.forEach(genre => {
        genres += genre.name + ", "
    })

    if (tvShowCredits.length > 5){
        for (let i=0; i < 5; i++){
            castings += tvShowCredits[i].name + ", ";
        }
        castings = castings.slice(0, -2) + "...";
    }else{
        tvShowCredits.forEach(casting => {
            castings += casting.name + ", "
        })
        castings = castings.substring(0, castings.length - 2);
    }


    genres = genres.substring(0, genres.length - 2);
    console.log("details", tvShowDetail)
    console.log("credits", tvShowCredits)
    return (
        <div>
            <div className={s.title}>
                {tvShow.name ? tvShow.name : tvShow.title}
            </div>
            <span className={s.year}>
                {tvShowDetail.first_air_date ?
                    new Date(tvShowDetail.first_air_date).getFullYear()
                    : new Date(tvShowDetail.release_date).getFullYear()
                }
            </span> <br/>
            <span>
                {tvShowDetail.number_of_seasons ? `Seasons: ${tvShowDetail.number_of_seasons} | ` : ""}
                {genres}
            </span> <br/>
            <span>{castings}</span>
            <div className={s.rating}>
                <FiveStarRating rating={rating}/>
            </div>
            <div className={s.overview}>
                {tvShow.overview}
            </div>
        </div>
    )

}