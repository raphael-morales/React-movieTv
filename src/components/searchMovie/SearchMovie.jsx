import s from './SearchMovie.module.css';
import {Search} from "react-bootstrap-icons";

export function SearchMovie({onChangeItem, onChangeCategory, category, valueSearch}) {

    function updateCategorySearch(e) {
        const value = e.target.value;
        onChangeCategory(value);
    }

    function searchMovie(e) {
        const name = e.target.value;
        onChangeItem(name);
    }

    return (
        <>
            <div>
                <select className={s.selectCategory} name="category" value={category} onChange={updateCategorySearch}>
                    <option value="tv">Série</option>
                    <option value="movie">Movie</option>
                </select>
            </div>
            <div>
                <Search size={27} className={s.icon}/>
                <input className={s.input}
                       value={valueSearch ? valueSearch : ""}
                       onChange={searchMovie}
                       placeholder={`Enter ${category === "tv" ? "serie" : "movie"} name`}
                       type="text"/>
            </div>

        </>
    )
}