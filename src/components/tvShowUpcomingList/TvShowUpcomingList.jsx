import s from './TvShowUpcomingList.module.css';
import {TvShowListItem} from "../tvShowListItem/TvShowListItem";

export function TvShowUpcomingList({onItemClick, populars}) {
    function displayPopulars() {

        return populars.map((popular) => (
            <span key={popular.id} className={s.tv_show_list_item}>
                <TvShowListItem onItemClick={onItemClick} recommendation={popular}>
                </TvShowListItem>
            </span>
        ));
    }

    return (
        <div className={s.list}>
            {displayPopulars()}
        </div>
    )
}