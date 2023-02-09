import React, { FC } from 'react';
import RatingStars from './RatingStars';
import UserAndTime from './UserAndTime';
import Summary from './Summary';
import ReviewBody from './ReviewBody';
import Helpful from './Helpful';

interface ReviewProps {
  review: {
    body: string;
    date: string;
    helpfulness: number;
    photos: Array<object>;
    rating: number;
    recommend: boolean;
    response: unknown;
    review_id: number;
    reviewer_name: string;
    summary: string;
  }
  key: number;
  getReviewData: Function;
};

const Review: FC<ReviewProps> = ({ review, getReviewData }) => {

  // console.log(review.body)

  return (
    <div className="single-review">
      <div className="info-bar">
        < RatingStars rating={ review.rating }/>
        < UserAndTime date={ review.date } reviewer_name={ review.reviewer_name }/>
      </div>
      <div className="review-text">
        < Summary summary={review.summary}/>
        < ReviewBody body={review.body}/>
        < Helpful review_id={ review.review_id }helpfulness={review.helpfulness} getReviewData={ getReviewData }/>
      </div>
    </div>
  )
}

export default Review;