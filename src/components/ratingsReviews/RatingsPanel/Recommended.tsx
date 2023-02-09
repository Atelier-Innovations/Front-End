import React, { FC } from 'react';

interface RecommendedProps {
  recommended: object;
};

const Recommended: FC<RecommendedProps> = ({ recommended }) => {

  const recommendedPercentage = (recommended) => {
    if (!recommended) {
      return null;
    }
    let notRecommended = Number(recommended.false);
    let wasRecommended = Number(recommended.true);

    return ((wasRecommended/(wasRecommended + notRecommended)) * 100).toPrecision(2) + '%'
  }


  return (
    <div className="recommendation">
      { recommendedPercentage(recommended) } of reviews recommend this product
    </div>
  )
}

export default Recommended;