import s from './TvShowList.module.css';
import {TvShowListItem} from "../tvShowListItem/TvShowListItem";

export function TvShowList({onItemClick, recommendations}) {

    function displayRecommendations() {

        return recommendations.map((recommendation) => (
            <span key={recommendation.id} className={s.tv_show_list_item}>
                <TvShowListItem onItemClick={onItemClick} recommendation={recommendation}>
                </TvShowListItem>
            </span>
        ));
    }

    return (
        <div className={s.list}>
            {displayRecommendations()}
        </div>
    )
}