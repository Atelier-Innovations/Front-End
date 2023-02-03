import React, { FC } from 'react';
import SortBy from './SortBy';
import Review from './Review/Review';

interface ReviewListProps {
  currentReviews: {
    results?: [];
  };
  productMetaData: {
    characteristics?: object;
    product_id?: number;
    ratings?: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    recommended?: object;
  };
  setSort: Function;
  sort: string;
  reviewCount: number;
  setReviewCount: Function;
}


const ReviewList: FC<ReviewListProps> = ({ sort, currentReviews, setSort, reviewCount, setReviewCount, productMetaData }) => {
  // console.log('From ReviewList:', currentReviews.results)
  // console.log(currentReviews.results.review_id)

  const onClickMoreReviews = () => {
    setReviewCount(reviewCount += 2)
  }

  return (
    <div className="review-list">
      < SortBy sort={ sort } setSort={ setSort } ratings={ productMetaData.ratings }/>
      { currentReviews.results && currentReviews.results.map((review, id) => {
        return < Review key={id} review={review}/>
      }) }
      <div className="button-panel">
        <button onClick={ onClickMoreReviews }>MORE REVIEWS</button>
        <button>ADD A REVIEW +</button>
      </div>
    </div>
  )
}

export default ReviewList;