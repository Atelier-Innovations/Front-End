import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import AddToOutfitCard from './AddToOutfitCard';

interface CarouselProps {
  items?: Array<string>;
  currentProductID: string;
  currentProductData: object;
  handleCardClick: (active: string) => void;
  handleAddOutfit: (active: string) => void;
  handleRemoveOutfit: (active: string) => void;
  carouselType: string,
  productMetaData: {
    ratings: object;
  }
}

const Carousel: FC<CarouselProps> = ({items, currentProductID, currentProductData, handleCardClick, carouselType, handleAddOutfit, handleRemoveOutfit, productMetaData}) => {

  // create itemsToDisplay state array with a slice, change range for each type of carousel
  // create functions for forward and back that update
  // render arrows conditionally if there are more items before or after

  const [firstItemIndex, setfirstItemIndex] = useState(0)
  const [lastItemIndex, setLastItemIndex] = useState(4)

  // make exception for last item in shorter outfit array
  useEffect(() => {
    if (carouselType === 'outfit') {
      setLastItemIndex(3)
    }
  }, [items])

  const handleForwardClick = () => {
    // check if more items
    if (items.length > lastItemIndex) {
      setfirstItemIndex(firstItemIndex + 1)
      setLastItemIndex(lastItemIndex + 1)
    }
  }

  const handleBackwardClick = () => {
    // check if firstItemIndex > 0
    if (firstItemIndex > 0) {
      setfirstItemIndex(firstItemIndex - 1)
      setLastItemIndex(lastItemIndex - 1)
    }
  }

  const renderForwardArrow = () => {
    if (items.length > lastItemIndex) {return true}
    return false
  }

  const renderBackwardsArrow = () => {
    if (firstItemIndex > 0) {return true}
    return false
  }

  const itemsToDisplay = items.slice(firstItemIndex, lastItemIndex)

  return (
    <div className='carousel carousel_related'>
    {carouselType === 'relatedProducts' &&
      items.length > 0 &&
      itemsToDisplay.map((cardID, index) => {
        if (index < 4) {
          return (
            <Card
              cardType='product'
              currentProductID={currentProductID}
              currentProductData={currentProductData}
              cardID={cardID}
              key={cardID}
              handleCardClick={handleCardClick}
              productMetaData={productMetaData}
            />
          );
        }
      })
    }

    {carouselType === 'outfit' &&
      <>
        <AddToOutfitCard currentProductData={currentProductData} handleAddOutfit={handleAddOutfit} currentProductID={currentProductID} />
        {items.length > 0 &&
          itemsToDisplay.map((cardID, index) => {
            if (index < 3) {
              return (
                <Card
                  cardType='outfit'
                  currentProductID={currentProductID}
                  currentProductData={currentProductData}
                  cardID={cardID}
                  key={cardID}
                  handleRemoveOutfit={handleRemoveOutfit}
                  handleCardClick={handleCardClick}
                  productMetaData={productMetaData}
                />
              );
            }
          })
        }
      </>
    }

      {renderBackwardsArrow() && <div className='arrow arrow-left' onClick={handleBackwardClick}>{'<'}</div>}
      {renderForwardArrow() && <div className='arrow arrow-right' onClick={handleForwardClick}>{'>'}</div>}
    </div>
  );
}

export default Carousel;
