import React, { FC } from 'react';
import { Rating } from 'react-simple-star-rating';

interface OverallRatingProps {
  ratings: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
};

const OverallRating: FC<OverallRatingProps> = ({ ratings }) => {

  const averageRating = (ratings: object) => {
    if (!ratings) {
      return;
    }
    // console.log('fromOverallRatings', ratings)
    let overallRating = Math.round(((Number(ratings['1']) * 1) + (Number(ratings['2']) * 2) + (Number(ratings['3']) * 3) + (Number(ratings['4']) * 4) + (Number(ratings['5']) * 5)) / ( Number(ratings['1']) + Number(ratings['2']) + Number(ratings['3']) + Number(ratings['4']) + Number(ratings['5'])) * 10) / 10

    if (overallRating.toString().length === 1) {
      let stringRating: string = overallRating.toString()
      stringRating += '.0'
      return stringRating
    } else {
      let stringRating: string = overallRating.toString()
      return stringRating;
    }
  }

  // console.log()

  return (
    <div className="overall-rating">
      <div>{ averageRating(ratings) }</div>
      <div className="overall-stars"> < Rating readonly={true} initialValue={ Number(averageRating(ratings)) } size={ 18 } fillColor="#525252" emptyColor="#00000040" allowFraction={ true }/> </div>
    </div>
  )
}

export default OverallRating;