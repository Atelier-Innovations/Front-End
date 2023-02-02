import React, { FC } from 'react';
import StarChart from './StarChart';
import OverallRating from './OverallRating';
import Sliders from './Sliders';
import Recommended from './Recommended';

interface RatingsListProps {
  productMetaData: {
    characteristics?: object;
    product_id?: number;
    ratings?: object;
    recommended?: object;
  }
}

const RatingsList: FC<RatingsListProps> = ({ productMetaData }) => {

  // console.log('From RatingsList:', productMetaData)

  return (
  <div className="ratings-panel">
    < OverallRating ratings={ productMetaData.ratings }/>
    < Recommended recommended={ productMetaData.recommended }/>
    < StarChart ratings={ productMetaData.ratings }/>
  </div>
  )
}



export default RatingsList;