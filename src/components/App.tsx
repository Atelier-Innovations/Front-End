import React from 'react';
import { useState, useEffect } from 'react';
import Overview from './overview/Overview';
import RatingsReviews from './ratingsReviews/RatingsReviews';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QandA from './qAndA/QandA';
import { getProductDataFromDB, getRatingsDataFromDB } from '../helperFunctions';

export const App: React.FC = () => {
  const [currentProductID, setCurrentProductID] = useState<string>('37311');
  const [currentProductData, setCurrentProductData] = useState<object>({})
  const [ productMetaData, setProductMetaData ] = useState({})

  useEffect(() => {
    // get current product data
    getProductDataFromDB(currentProductID, setCurrentProductData)
    getRatingsDataFromDB(currentProductID, setProductMetaData)
    window.scrollTo(0, 105)
  }, [currentProductID])

  const handleCardClick = (cardID) => {
    setCurrentProductID(cardID)
  }

  console.log(currentProductData)



  return (
    <div className='app'>
      <nav>
        <h1>Store Name</h1>
        <ul className="nav-list">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#related-products">Related Products</a></li>
          <li><a href="#q-and-a">Q&A</a></li>
          <li><a href="#reviews-ratings">Ratings & Reviews</a></li>
        </ul>
      </nav>
      <Overview currentProductID={currentProductID}
                currentProductData={currentProductData}
                productMetaData={productMetaData} />
      <RelatedProducts currentProductID={currentProductID} currentProductData={currentProductData} handleCardClick={handleCardClick} productMetaData={productMetaData}/>
      {/* <QandA currentProductID={currentProductID} /> */}
      <RatingsReviews currentProductID={currentProductID} productMetaData={ productMetaData }/>
    </div>
  );
};
