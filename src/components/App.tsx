import React from 'react';
import { useState, useEffect } from 'react';
import Overview from './overview/Overview';
import RatingsReviews from './ratingsReviews/RatingsReviews';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QandA from './qAndA/QandA';
import ReactModal from 'react-modal';
import axios from 'axios';

export const App: React.FC = () => {
  const [currentProductID, setCurrentProductID] =
    React.useState<string>('37311');

  const [currentProductData, setCurrentProductData] = useState<object>({})

  const getCurrentProductDataFromDB = () => {
    axios
      .get(`http://localhost:6969/products/${currentProductID}`, {})
      .then((result) => {
        setCurrentProductData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCurrentProductDataFromDB()
  }, [])

  console.log('current product data app: ', currentProductData)

  return (
    <div className='app'>
      <nav></nav>

      <Overview currentProductID={currentProductID} />
      <RelatedProducts currentProductID={currentProductID} currentProductData={currentProductData} />
      <QandA currentProductID={currentProductID} />
      <RatingsReviews currentProductID={currentProductID} />
    </div>
  );
};
