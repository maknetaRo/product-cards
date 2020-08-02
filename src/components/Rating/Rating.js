import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';


const Rating = (props) => {
    const styleStar = {
        color: "#006768",
    }
    const row = {
        display: "flex",
        alignItems: "center"
    }
    const [rating, setRating] = useState(props.rating)
    return (
        <div style={row}>
            <h3 style={styleStar}>
                {rating >= 1 ? (<IoIosStar onClick={() => setRating(1)} />) : (<IoIosStarOutline onClick={() => setRating(1)} />)}
                {rating >= 2 ? (<IoIosStar onClick={() => setRating(2)} />) : (<IoIosStarOutline onClick={() => setRating(2)} />)}
                {rating >= 3 ? (<IoIosStar onClick={() => setRating(3)} />) : (<IoIosStarOutline onClick={() => setRating(3)} />)}
                {rating >= 4 ? (<IoIosStar onClick={() => setRating(4)} />) : (<IoIosStarOutline onClick={() => setRating(4)} />)}
                {rating >= 5 ? (<IoIosStar onClick={() => setRating(5)} />) : (<IoIosStarOutline onClick={() => setRating(5)} />)}
            </h3>


        </div>
    )
}

export default Rating;