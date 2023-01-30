import React, { FC } from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

// category, name, price (price for default style), and rating
interface CardProps {
  id: string;
}
const Card: FC<CardProps> = (props) => {
  const [productData, setProductData] = useState({});
  const [productImage, setProductImage] = useState('');

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

  // get product img
  const getProductImgFromDB = async () => {
    let response = await axios.get(
      `http://localhost:6969/products/${props.id}/styles`
    );
    setProductImage(response.data.results[0].photos[0].thumbnail_url);
  };

  useEffect(() => {
    getProductDataFromDB();
    getProductImgFromDB();
  }, []);

  // create product object type
  type ProductObject = {
    name?: string;
    category?: string;
    default_price?: string;
  };

  //perform type checking
  const product: ProductObject = productData;
  const img: string = productImage;

  const name = product.name;
  const category = product.category;
  const price = product.default_price;

  return (
    <div className='card'>
      <div className='cardImage' style={{ backgroundImage: `url(${img})` }}>
        jfkldafjdlak
      </div>
      <div className='cardInfo'>
        <p>{name}</p>
        <p>{category}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
