import React, { FC } from 'react';

interface RecommendedProps {
  recommended: object;
};

const Recommended: FC<RecommendedProps> = (props) => {

  return (
    <div className="recommendation">
       100% of reviews recommend this product
    </div>
  )
}

export default Recommended;