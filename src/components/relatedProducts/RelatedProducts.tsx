import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

interface RelatedProductsProps {}

interface ProductIds {}

const RelatedProducts: FC<RelatedProductsProps> = (props) => {
  console.log('building rp');

  //temporary currentProductId, change to props once added
  const [currentProductId, setCurrentProductId] = useState<string>('37311');

  // get related product ids from database
  const [relatedProductIds, setRelatedProductIds] = useState<Array<string>>([]);

  // get related roducts from db
  const getRelatedProductsFromDB = () => {
    axios
      .get(`http://localhost:6969/products/${currentProductId}/related`, {})
      .then((result) => {
        setRelatedProductIds(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // make http request for data
  useEffect(() => {
    getRelatedProductsFromDB();
  }, []);

  console.log('final related product Ids: ', relatedProductIds);

  return (
    <section className='related-products widget'>
      <h2 className='title'>Related Products</h2>
      <div className='carousel'>
        {relatedProductIds.map((productId) => {
          return <Card id={productId} key={productId} />;
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
