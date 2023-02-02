import React from 'react';
import { useState, useEffect } from 'react';
import Overview from './overview/Overview';
import RatingsReviews from './ratingsReviews/RatingsReviews';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QandA from './qAndA/QandA';
import { getProductDataFromDB } from '../helperFunctions';

export const App: React.FC = () => {
  const [currentProductID, setCurrentProductID] = useState<string>('37311');
  const [currentProductData, setCurrentProductData] = useState<object>({})

  useEffect(() => {
    // get current product data
    getProductDataFromDB(currentProductID, setCurrentProductData)
  }, [currentProductID])

  const handleCardClick = (cardID) => {
    setCurrentProductID(cardID)
  }


  return (
    <div className='app'>
      <nav></nav>
      <Overview currentProductID={currentProductID} />
      <RelatedProducts currentProductID={currentProductID} currentProductData={currentProductData} handleCardClick={handleCardClick} />
      <QandA currentProductID={currentProductID} />
      <RatingsReviews currentProductID={currentProductID} />
    </div>
  );
};
