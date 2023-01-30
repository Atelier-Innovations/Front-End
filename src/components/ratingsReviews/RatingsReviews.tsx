import React, { FC } from 'react';
import ReviewsList from './ReviewsPanel/ReviewList'
import RatingsList from './RatingsPanel/RatingsList';


interface RatingsReviewsProps {

}

const RatingsReviews: FC<RatingsReviewsProps> = (props) => {


  return (
    <div className="widget reviews-ratings">
      <div className="banner">
        <strong>RATINGS & REVIEWS</strong>
      </div>

      <div className="overall">
        < RatingsList />
        < ReviewsList />
      </div>

      <div className="button-panel">
        <button>More Reviews</button>
        <button>Add A Review +</button>
      </div>



    </div>
  )
}

export default RatingsReviews;