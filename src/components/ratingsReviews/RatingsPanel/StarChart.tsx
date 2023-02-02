import React, { FC } from 'react';

interface StarChartProps {
  ratings: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
};

const StarChart: FC<StarChartProps> = ({ ratings }) => {

  const totalRatings = (ratings:object) => {
    if (ratings === undefined) {
      return;
    }
    return Number(ratings['1']) + Number(ratings['2']) + Number(ratings['3']) + Number(ratings['4']) + Number(ratings['5']);
  }


  return (
    <div className="filter-by-star">
      <div className="five stars">
        5 Stars
        <progress  value={ ratings && ratings['5'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="four stars">
        4 Stars
        <progress  value={ ratings && ratings['4'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="three stars">
        3 Stars
        <progress  value={ ratings && ratings['3'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="two stars">
        2 Stars
        <progress  value={ ratings && ratings['2'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="one stars">
        1 Stars
        <progress  value={ ratings && ratings['1'] } max={ totalRatings(ratings) }></progress>
      </div>
    </div>
  )
}

export default StarChart;

