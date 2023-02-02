import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../shared/Modal';
import ComparisonModal from './ComparisonModal';
import { getProductDataFromDB } from '../../helperFunctions';


interface CardProps {
  currentProductID: string;
  cardID: string;
  currentProductData: object;
}

const Card: FC<CardProps> = ({
  currentProductID,
  cardID,
  currentProductData,
}) => {

  const [cardProductData, setCardProductData] = useState({});
  const [productImage, setProductImage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // get product img
  const getCardProductImgFromDB = async () => {
    let response = await axios.get(
      `http://localhost:6969/products/${cardID}/styles`
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

  // retrieve all data
  useEffect(() => {
    getProductDataFromDB(cardID, setCardProductData);
    getCardProductImgFromDB();
  }, []);

  // create product object type and perform type check
  type ProductObject = {
    name?: string;
    category?: string;
    default_price?: string;
  };
  const product: ProductObject = cardProductData;

  return (
    <>
      <Modal
        modalClassName='comparisonModal'
        overlayClassName='modalOverlay'
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <ComparisonModal
          currentProductID={currentProductID}
          currentProductData={currentProductData}
          cardID={cardID}
          cardProductData={cardProductData}
          setCardProductData={setCardProductData}

        />
      </Modal>

      <div className='card' onClick={() => setModalIsOpen(true)}>
        <div
          className='cardImage'
          style={{ backgroundImage: `url(${productImage})` }}
        ></div>
        <div className='cardInfo'>
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>{product.default_price}</p>
          <p>Stars go here</p>
        </div>
      </div>
    </>
  );
};

export default Card;
