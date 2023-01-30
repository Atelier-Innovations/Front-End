import React, { FC } from 'react';
import SortBy from './SortBy';
import Review from './Review/Review';

interface ReviwListProps {

}


const ReviewList: FC<ReviwListProps> = (props) => {


  return (
    <div className="review-list">
      < SortBy />
      < Review />
    </div>
  )
}

export default ReviewList;