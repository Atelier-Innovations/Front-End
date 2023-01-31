import React, { FC } from 'react';
import SortBy from './SortBy';
import Review from './Review/Review';

interface ReviwListProps {
  currentReviews: {
    // currentReviews: object;

  }
}


const ReviewList: FC<ReviwListProps> = ({ currentReviews }) => {

  // console.log(currentReviews.results)

  return (
    <div className="review-list">
      < SortBy />
      {/* { currentReviews.results.map((review: object) => {
        return < Review review={review} />
      })} */}
      < Review />
    </div>
  )
}

export default ReviewList;