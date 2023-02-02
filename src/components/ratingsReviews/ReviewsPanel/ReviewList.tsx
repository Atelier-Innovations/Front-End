import React, { FC } from 'react';
import SortBy from './SortBy';
import Review from './Review/Review';

interface ReviewListProps {
  currentReviews: {
    results?: [];
  }
  setSort: Function
  sort: string
  reviewCount: number;
  setReviewCount: Function;
}


const ReviewList: FC<ReviewListProps> = ({ sort, currentReviews, setSort, reviewCount, setReviewCount }) => {
  // console.log('From ReviewList:', currentReviews.results)
  // console.log(currentReviews.results.review_id)

  const onClickMoreReviews = () => {
    setReviewCount(reviewCount += 2)
  }

  return (
    <div className="review-list">
      < SortBy sort={ sort } setSort={ setSort }/>
      { currentReviews.results && currentReviews.results.map((review, id) => {
        return < Review key={id} review={review}/>
      }) }
      <div className="button-panel">
        <button onClick={ onClickMoreReviews }>More Reviews</button>
        <button>Add A Review +</button>
      </div>
    </div>
  )
}

export default ReviewList;