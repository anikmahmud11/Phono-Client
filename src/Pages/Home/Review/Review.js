import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = () => {
    const [userReviews, setUserReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center p-3">Reviews</h1>
            <div className=" text-center m-auto container row w-50">
                {
                    userReviews.map(userReview => <div
                        key={userReview.name}
                    >

                        <div className="card text-white bg-secondary m-2 mb-3" >
                            <div className="card-header">{userReview.email}</div>
                            <div className="card-body">
                                <h5 className="card-title"><Rating
                                    initialRating={userReview.rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly></Rating></h5>
                                <p className="card-text">{userReview.description}</p>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;