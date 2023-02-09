import React, { FC } from 'react';
import StarChart from './StarChart';
import OverallRating from './OverallRating';
import Sliders from './RatingsSliders/Sliders';
import Recommended from './Recommended';

interface RatingsListProps {
  productMetaData: {
    characteristics?: {
      Comfort?: {
        id: number;
        value: string;
      }
      Fit?: {
        id: number;
        value: string;
      }
      Length?: {
        id: number;
        value: string;
      }
      Qualityt?: {
        id: number;
        value: string;
      }
    };
    product_id?: number;
    ratings?: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    recommended?: object;
  };
  filteredReviews: {
    oneStar?: Array<object>;
    twoStar?: Array<object>;
    threeStar?: Array<object>;
    fourStar?: Array<object>;
    fiveStar?: Array<object>;
  };
  setDisplayedReviews: Function;
  currentReviews: {
    results?: [];
  };
  displayedReviews: Array<object>
}




const RatingsList: FC<RatingsListProps> = ({ productMetaData, filteredReviews, setDisplayedReviews, displayedReviews, currentReviews }) => {

  // console.log('From RatingsList:', productMetaData)

  return (
  <div className="ratings-panel">
    < OverallRating ratings={ productMetaData.ratings }/>
    < Recommended recommended={ productMetaData.recommended }/>
    < StarChart ratings={ productMetaData.ratings } setDisplayedReviews={ setDisplayedReviews } displayedReviews={ displayedReviews } filteredReviews={ filteredReviews } currentReviews={ currentReviews } />
    < Sliders characteristics={ productMetaData.characteristics }/>
  </div>
  )
}



export default RatingsList;