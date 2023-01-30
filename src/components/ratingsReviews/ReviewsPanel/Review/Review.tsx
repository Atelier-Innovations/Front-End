import React, { FC } from 'react';
import Stars from './Stars';
import UserAndTime from './UserAndTime';
import Summary from './Summary';
import ReviewBody from './ReviewBody';
import Helpful from './Helpful';

interface ReviewProps {

};

const Review: FC<ReviewProps> = (props) => {



  return (
    <div className="single-review">
      <div className="info-bar">
        < Stars />
        < UserAndTime />
      </div>
      <div className="review-text">
        < Summary />
        < ReviewBody />
        < Helpful />
      </div>
    </div>
  )
}

export default Review;