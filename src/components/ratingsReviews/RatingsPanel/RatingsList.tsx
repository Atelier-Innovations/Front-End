import React, { FC } from 'react';
import StarChart from './StarChart';
import OverallRating from './OverallRating';
import Sliders from './Sliders';
import Recommended from './Recommended';

interface RatingsListProps {
  productMetaData: {
    characteristics?: object;
    product_id?: number;
    ratings?: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    recommended?: object;
  }
}

const RatingsList: FC<RatingsListProps> = ({ productMetaData }) => {

  // console.log('From RatingsList:', productMetaData.ratings)

  return (
  <div className="ratings-panel">
    < OverallRating ratings={ productMetaData.ratings }/>
    < Recommended recommended={ productMetaData.recommended }/>
    < StarChart ratings={ productMetaData.ratings }/>
  </div>
  )
}



export default RatingsList;