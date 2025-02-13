import s from './FiveStarRating.module.css';
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({rating}) {

    var starsList = [];
    var indexRating = rating;

    function StarsRating() {
        for (let i = 0; i < 5; i++) {
            if (indexRating >= 1) {
                starsList.push(<StarFill key={i} color={'gold'} />)
            }else if (indexRating >= 0.50) {
                starsList.push(<StarHalf key={i} color={'gold'}/>)
            }else{
                starsList.push(<StarEmpty key={i} color={'gold'}/>)
            }
            indexRating--;
        }
        return (
            starsList
        )
    }

    return (
        <div>
            {StarsRating()} <br/>
        </div>
    );
}