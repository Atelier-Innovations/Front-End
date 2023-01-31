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
  const [showModal, setShowModal] = useState(false);

  // get product data
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
    let img = response.data.results[0].photos[0].thumbnail_url;
    // check image for null value and display "not available" if true
    if (img === null) {
      setProductImage(
        'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
      );
    } else {
      setProductImage(img);
    }
  };

  // retreive all data
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
  const product: ProductObject = productData;

  // handle show modal
  const divClickHandler = () => {};

  return (
    <>
      <div className='card' onClick={divClickHandler}>
        <div
          className='cardImage'
          style={{ backgroundImage: `url(${productImage})` }}
        ></div>
        <div className='cardInfo'>
          <p>{product.name}</p>
          <p>{product.category}</p>
          <p>{product.default_price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
