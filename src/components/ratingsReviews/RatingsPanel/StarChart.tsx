import React, { FC } from 'react';

interface StarChartProps {
  ratings: object;
};

const StarChart: FC<StarChartProps> = (props) => {

  return (
    <div className="filter-by-star">
      <div className="five stars">5 Stars</div>
      <div className="four stars">4 Stars</div>
      <div className="three stars">3 Stars</div>
      <div className="two stars">2 Stars</div>
      <div className="one stars">1 Star</div>
    </div>
  )
}

export default StarChart;