import React, { FC } from 'react';
import SortBy from './SortBy';
import Review from './Review/Review';

interface ReviewListProps {
  currentReviews: {
    results?: [];
  }
  setSort: Function
  sort: string
}


const ReviewList: FC<ReviewListProps> = ({ sort, currentReviews, setSort }) => {


  // console.log('From ReviewList:', currentReviews.results)

  // console.log(currentReviews.results.review_id)

  return (
    <div className="review-list">
      < SortBy sort={ sort } setSort={ setSort }/>
      { currentReviews.results && currentReviews.results.map((review, id) => {
        return < Review key={id} review={review}/>
      }) }
      <div className="button-panel">
        <button>More Reviews</button>
        <button>Add A Review +</button>
      </div>
    </div>
  )
}

export default ReviewList;