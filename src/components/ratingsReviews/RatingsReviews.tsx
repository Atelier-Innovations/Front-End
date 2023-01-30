import React, { FC } from 'react';


interface RatingsReviewsProps {

}

const RatingsReviews: FC<RatingsReviewsProps> = (props) => {


  return (
    <div className="widget reviews-ratings">
      <div className="banner">
        RATINGS & REVIEWS
      </div>

      <div className="overall">
        <div className="ratings-panel">
          Ratings Panel here
        </div>

        <div className="review-list">
          Individual review components rendered here<br/>



      </div><br/>
      </div>

      <div className="button-panel">
        <button>More Reviews</button>
        <button>Add A Review +</button>
      </div>



    </div>
  )
}

export default RatingsReviews;