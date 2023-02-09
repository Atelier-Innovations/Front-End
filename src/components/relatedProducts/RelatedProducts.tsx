import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { getRelatedProductsFromDB } from '../../helperFunctions'
import AddToOutfitCard from './AddToOutfitCard';
import Carousel from './Carousel'

interface RelatedProductsProps {
  currentProductID: string;
  currentProductData: {
    name: string;
  }
  handleCardClick: (active: string) => void;
  productMetaData: object;
}


const RelatedProducts: FC<RelatedProductsProps> = ({currentProductData,  currentProductID, handleCardClick, productMetaData}) => {

  const [relatedProductIDs, setRelatedProductIDs] = useState<Array<string>>([]);
  const [outfitProductIDs, setOutfitProductIDs] = useState<Array<string>>([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // get outfits from local storage
  useEffect(() => {
    const userOutfits = JSON.parse(window.localStorage.getItem('userOutfits'));
    console.log('user outfits: ', userOutfits)
    setOutfitProductIDs(userOutfits)
  }, []);

  // update local storage
  useEffect(() => {
    window.localStorage.setItem('userOutfits', JSON.stringify(outfitProductIDs));
  }, [outfitProductIDs]);

  // get related products data
  useEffect(() => {
    getRelatedProductsFromDB(currentProductID, setRelatedProductIDs);
  }, [currentProductID]);

  const handleAddOutfit = (currentProductID) => {
    if (outfitProductIDs.includes(currentProductID)){
      setShowErrorMessage(true)
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    } else {
      setOutfitProductIDs([...outfitProductIDs, currentProductID])
    }
  }

  const handleRemoveOutfit = (clickedCardID) => {
    setOutfitProductIDs((prev) => {
      return prev.filter(product => product !== clickedCardID)
    })
  }

  function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }

  const relatedItems = removeDuplicates(relatedProductIDs)

  console.log('related: ', relatedProductIDs)

  return (

    <section id="related-products" className='related-products widget'>
      <div className='title_div'>
        <h2 className='title'>{'Related Products'.toUpperCase()}</h2>
      </div>

      <Carousel
        items={relatedItems}
        currentProductID={currentProductID}
        currentProductData={currentProductData}
        handleCardClick={handleCardClick}
        carouselType='relatedProducts'
        productMetaData={productMetaData}
      />

      <div className='title_div'>
        <h2 className='title'>{'Your Outfit'.toUpperCase()}</h2>
        {showErrorMessage && <div className='outfit_error'>{currentProductData.name} is already in your outfit!</div>}

      </div>

      <Carousel
        items={outfitProductIDs}
        currentProductID={currentProductID}
        currentProductData={currentProductData}
        handleCardClick={handleCardClick}
        handleRemoveOutfit={handleRemoveOutfit}
        handleAddOutfit={handleAddOutfit}
        outfitProductIDs={outfitProductIDs}
        carouselType='outfit'
        productMetaData={productMetaData}
      />

    </section>
  );
};

export default RelatedProducts;
