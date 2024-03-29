import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Review = () => {
    const [userReviews, setUserReviews] = useState([])
    useEffect(() => {
        fetch('https://mysterious-sierra-88051.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center p-3 text-danger">Reviews</h1>
            <div className=" text-center m-auto  row w-auto">
                {
                    userReviews.map(userReview => <div
                        key={userReview.name}
                    >

                        <div className="card text-white bg-danger bg-opacity-50 m-2 mb-3 w-50 mx-auto" >
                            <div className="card-header">{userReview.email}</div>
                            <div className="card-body">
                                <h5 className="card-title  text-warning"><Rating
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