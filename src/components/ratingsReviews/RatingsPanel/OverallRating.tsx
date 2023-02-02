import React, { FC } from 'react';

interface OverallRatingProps {
  ratings: object;
};

const OverallRating: FC<OverallRatingProps> = (props) => {

  return (
    <div className="overall-rating">
      5.0
    </div>
  )
}

export default OverallRating;