import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

interface RelatedProductsProps {
  currentProductID: string;
  currentProductData: object;
}

interface ProductIds {}

const RelatedProducts: FC<RelatedProductsProps> = ({
  currentProductData,
  currentProductID,
}) => {
  // get related product ids from database
  const [relatedProductIDs, setRelatedProductIDs] = useState<Array<string>>([]);

  // get related roducts from db
  const getRelatedProductsFromDB = () => {
    axios
      .get(`http://localhost:6969/products/${currentProductID}/related`, {})
      .then((result) => {
        setRelatedProductIDs(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // make http request for data
  useEffect(() => {
    getRelatedProductsFromDB();
  }, []);

  console.log('currentProductData RP', currentProductData)

  return (
    <section className='related-products widget'>
      <h2 className='title'>Related Products</h2>
      <div className='carousel'>
        {relatedProductIDs.map((cardID) => {
          return (
            <Card
              currentProductID={currentProductID}
              currentProductData={currentProductData}
              cardID={cardID}
              key={cardID}
            />
          );
        })}
      </div>
      <h2 className='title'>Your Outfit</h2>
      <div className='carousel'>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
      </div>
    </section>
  );
};

export default RelatedProducts;
