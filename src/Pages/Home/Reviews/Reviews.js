import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Typed from 'react-typed';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    // const [review, setReview] = useState('')
    // const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <Typed className='review-title'
                    strings={[
                        'Customer Review '
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    >  
                    </Typed>
                   
            <div className='review-container container'>

                {
                    reviews.map(studentReview =><Review
                        key={studentReview.id}
                        studentReview={studentReview}
                    ></Review>)

                }
            </div>
        </div>
    );
};

export default Reviews;