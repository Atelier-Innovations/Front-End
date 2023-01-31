import React, { FC } from 'react';
import ReviewsList from './ReviewsPanel/ReviewList'
import RatingsList from './RatingsPanel/RatingsList';
import axios from 'axios';
import { useState, useEffect } from 'react'


interface RatingsReviewsProps {
  currentProductID: string
}

const RatingsReviews: FC<RatingsReviewsProps> = (props) => {
  const [ currentReviews, setCurrentReviews ] = useState({})

  useEffect(() => {
    reviewData();
  }, [])

  const reviewData = () => {
    axios.get('http://localhost:6969/reviews', {
      params: {
        id: props.currentProductID
      }
    })
      .then((results) => {

        setCurrentReviews(results.data)

      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="widget reviews-ratings">
      <div className="banner">
        <strong>RATINGS & REVIEWS</strong>
      </div>

      <div className="overall">
        < RatingsList />
        < ReviewsList currentReviews={currentReviews}/>
      </div>

      <div className="button-panel">
        <button>More Reviews</button>
        <button>Add A Review +</button>
      </div>



    </div>
  )
}

export default RatingsReviews;