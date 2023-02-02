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
};

const Review: FC<ReviewProps> = ({ review }) => {

  // console.log(review.body)

  return (
    <div className="single-review">
      <div className="info-bar">
        < RatingStars rating={review.rating}/>
        < UserAndTime />
      </div>
      <div className="review-text">
        < Summary summary={review.summary}/>
        < ReviewBody body={review.body}/>
        < Helpful helpfulness={review.helpfulness}/>
      </div>
    </div>
  )
}

export default Review;