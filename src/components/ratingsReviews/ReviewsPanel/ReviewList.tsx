import React, { FC } from 'react';
import SortBy from './SortBy';
import Review from './Review/Review';
import { useState } from 'react';

interface ReviewListProps {
  currentReviews: {
    results?: [];

  }
  sort: string;
  setSort: Function
}


const ReviewList: FC<ReviewListProps> = ({ currentReviews }) => {


  console.log('From ReviewList:', currentReviews.results)

  // console.log(currentReviews.results.review_id)

  return (
    <div className="review-list">
      < SortBy />
      { currentReviews.results && currentReviews.results.map((review, id) => {
        return < Review key={id} review={review}/>
      })}
    </div>
  )
}

export default ReviewList;