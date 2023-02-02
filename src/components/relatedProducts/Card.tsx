import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../shared/Modal';
import ComparisonModal from './ComparisonModal';
import { getProductDataFromDB } from '../../helperFunctions';


interface CardProps {
  cardType: string,
  currentProductID: string;
  cardID: string;
  currentProductData: object;
  handleCardClick?: (active: string) => void;
}

const Card: FC<CardProps> = ({cardType, currentProductID, cardID, currentProductData, handleCardClick}) => {

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

  const onCardClick = (e) => {
    // Check to see if click came from compare button, if it did don't execute handleCardClick
    if (e.target.innerHTML !== 'Compare') {
      handleCardClick(cardID.toString())
    }
  }

  return (
    <>
      <Modal
        modalClassName='comparisonModal'
        overlayClassName='modalOverlay'
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <ComparisonModal
          currentProductData={currentProductData}
          cardProductData={cardProductData}
        />
      </Modal>

      <div className='card'>
        <div
          className='cardImage'
          style={{ backgroundImage: `url(${productImage})` }}
          onClick={(e) => onCardClick(e)}
        >
        {cardType === 'product' ?
        <div className='button_div'>
            <button className="compare_button" onClick={() => setModalIsOpen(true)}>Compare</button>
        </div> :
        <div className='button_div'>
          <button className="remove_button" onClick={() => setModalIsOpen(true)}>X</button>
        </div>
        }


        </div>
        <div className='cardInfo' onClick={(e) => onCardClick(e)}>
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
