import React, { FC } from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

// category, name, price (price for default style), and rating
interface CardProps {
  id: string;
}

const Card: FC<CardProps> = (props) => {
  const [productData, setProductData] = useState({});

  console.log('product data: ', productData);

  // get product info
  const getProductDataFromDB = () => {
    axios
      .get(`http://localhost:6969/products/${props.id}`, {})
      .then((result) => {
        setProductData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductDataFromDB();
  }, []);

  // create product object type
  type ProductObject = {
    name?: string;
    category?: string;
    default_price?: string;
  };

  const product: ProductObject = productData;

  const name = product.name;
  const category = product.category;
  const price = product.default_price;

  console.log('type checked product object: ', product);

  return (
    <div>
      <p>{name}</p>
      <p>{category}</p>
      <p>{price}</p>
      <p>Rating</p>
    </div>
  );
};

export default Card;
