import React from 'react';
import './Card.css';
import Rating from '../Rating/Rating';


const Card = (props) => {

    return (
        <div className="container">
            <div className="upper">
                <img className="photo" src={props.data.imageUrl} alt="bracelet" />
            </div>
            <div className="lower">
                <h1 className="title">{props.data.title}</h1>
                <p className="para">{props.data.description}</p>
                <h2 className="price">{props.data.price}</h2>
                <div className="row">
                    <Rating rating={props.data.rating} numOfReviews={props.data.numOfReviews} />

                </div>
            </div>


        </div >
    )
}

export default Card