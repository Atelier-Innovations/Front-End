import React, { FC } from 'react';
import StarChart from './StarChart';
import OverallRating from './OverallRating';
import Sliders from './Sliders';

interface RatingsListProps {
  // currentReviews: object
}

const RatingsList: FC<RatingsListProps> = (props) => {



  return (
  <div className="ratings-panel">
    < OverallRating />
    <div className="recommendation">
       100% of reviews recommend this product
    </div>
    < StarChart />
  </div>
  )
}



export default RatingsList;