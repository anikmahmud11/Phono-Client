import React, { useEffect, useState } from 'react';

const Review = () => {
    const [userReviews, setUserReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center p-3">Reviews</h1>
           <div className="d-flex container">
           {
                userReviews.map(userReview => <div
                    key={userReview.name}
                >
                    <div id="carouselExampleCaptions" className="carousel slide w-auto m-3" data-bs-ride="carousel" >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={userReview.img} className="d-block w-100 border rounded-pill" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>{userReview.name}</h5>
                                    <p>{userReview.rating}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default Review;