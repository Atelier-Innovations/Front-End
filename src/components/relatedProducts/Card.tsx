import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../shared/Modal';
import ComparisonModal from './ComparisonModal';
import { getProductDataFromDB } from '../../helperFunctions';
import { averageRating, getRatingsDataFromDB, getCardProductImgFromDB, getSalePrice  } from '../../helperFunctions';
import { Rating } from 'react-simple-star-rating';


interface CardProps {
  cardType: string,
  currentProductID: string;
  cardID: string;
  currentProductData: object;
  handleCardClick?: (active: string) => void;
  handleRemoveOutfit?: (active: string) => void;
  productMetaData: object;
}

const Card: FC<CardProps> = ({cardType, currentProductID, cardID, currentProductData, handleCardClick, handleRemoveOutfit, productMetaData}) => {

  const [cardProductData, setCardProductData] = useState({});
  const [productImage, setProductImage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cardMetaData, setCardMetaData] = useState({});
  const [salePrice, setSalePrice] = useState('')


  console.log('sale price: ', salePrice)

  // retrieve all data
  useEffect(() => {
    getProductDataFromDB(cardID, setCardProductData);
    getCardProductImgFromDB(cardID, setProductImage);
    getRatingsDataFromDB(cardID, setCardMetaData);
    getSalePrice(cardID, setSalePrice);
  }, []);

  // create product object type and perform type check
  type ProductObject = {
    name?: string;
    category?: string;
    default_price?: string;
  };
  const product: ProductObject = cardProductData;

  const onCardClick = (e) => {
    // Check to see if click came from compare or remove buttons, if it did don't execute handleCardClick
    if (e.target.innerHTML !== 'Compare' && e.target.innerHTML !== 'X') {
      handleCardClick(cardID.toString())
    }
  }

  // get product meta data and calculate rating
  const cardRating:string = averageRating(cardMetaData.ratings)
  const currentProductRating:string = averageRating(productMetaData.ratings)

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
          cardRating={cardRating}
          currentProductRating={currentProductRating}
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
          <button className="remove_button" onClick={() => handleRemoveOutfit(cardID)}>X</button>
        </div>
        }


        </div>
        <div className='cardInfo' onClick={(e) => onCardClick(e)}>
          <div>{cardProductData.category && cardProductData.category.toUpperCase()}</div>
          <div>{cardProductData.name}</div>
          <div>${Math.round(cardProductData.default_price)}</div>
          <div className="overall-stars"> < Rating readonly={true} initialValue={cardRating} size={ 18 } fillColor="#525252" emptyColor="#00000040" allowFraction={ true }/> </div>
        </div>
      </div>
    </>
  );
};

export default Card;
