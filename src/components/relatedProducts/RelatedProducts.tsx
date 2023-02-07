import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { getRelatedProductsFromDB } from '../../helperFunctions'
import AddToOutfitCard from './AddToOutfitCard';
import Carousel from './Carousel'

interface RelatedProductsProps {
  currentProductID: string;
  currentProductData: object;
  handleCardClick: (active: string) => void;
}


const RelatedProducts: FC<RelatedProductsProps> = ({currentProductData,  currentProductID, handleCardClick}) => {

  const [relatedProductIDs, setRelatedProductIDs] = useState<Array<string>>([]);
  const [outfitProductIDs, setOutfitProductIDs] = useState<Array<string>>([]);

  // get related products data
  useEffect(() => {
    getRelatedProductsFromDB(currentProductID, setRelatedProductIDs);
  }, [currentProductID]);

  const handleAddOutfit = (currentProductID) => {
    if (outfitProductIDs.includes(currentProductID)){
      alert(`${currentProductData.name} is already in your outfit collection.`)
    } else {
      setOutfitProductIDs([...outfitProductIDs, currentProductID])
    }
  }

  const handleRemoveOutfit = (clickedCardID) => {
    setOutfitProductIDs((prev) => {
      return prev.filter(product => product !== clickedCardID)
    })
  }

  return (
    <section className='related-products widget'>
      <h2 className='title'>Related Products</h2>
      <Carousel
        items={relatedProductIDs}
        currentProductID={currentProductID}
        currentProductData={currentProductData}
        handleCardClick={handleCardClick}
        carouselType='relatedProducts'
      />

      <h2 className='title'>Your Outfit</h2>
      <Carousel
        items={outfitProductIDs}
        currentProductID={currentProductID}
        currentProductData={currentProductData}
        handleCardClick={handleCardClick}
        handleRemoveOutfit={handleRemoveOutfit}
        handleAddOutfit={handleAddOutfit}
        outfitProductIDs={outfitProductIDs}
        carouselType='outfit'
      />

    </section>
  );
};

export default RelatedProducts;
