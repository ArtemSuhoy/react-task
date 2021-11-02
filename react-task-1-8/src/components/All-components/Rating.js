import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa';
import './Rating.css';

const Rating = ({maxStars, selectStars}) => {
    // const [rating, setRating] = useState(null);
    const img = <img className='star' height='25px' width='25px' src="https://img.icons8.com/ios/50/000000/star--v1.png"/>;
   
    return(
        <div className='rating'>  
         { [...Array(+maxStars)].map((item, i) =>{
            let ratingValue = i + 1;
            return( <label>
                <input style={ { } } type='radio' name='rating' value={ratingValue} /* onClick={ () => setRating(ratingValue) */ />
                    <FaStar color={(ratingValue <= +selectStars) ? '#FFD700' : '#808080'} />
                </label>)
         }) }    
        </div>
    )
}

export default Rating