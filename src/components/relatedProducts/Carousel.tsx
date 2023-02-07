import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import AddToOutfitCard from './AddToOutfitCard';

interface CarouselProps {
}

const Carousel: FC<CarouselProps> = ({items, currentProductID, currentProductData, handleCardClick, carouselType, handleAddOutfit, handleRemoveOutfit}) => {
  console.log('items: ', items)

  // create itemsToDisplay state array with a slice, change range for each type of carousel
  // create functions for forward and back that update
  // render arrows conditionally if there are more items before or after

  const [firstItemIndex, setfirstItemIndex] = useState(0)
  const [lastItemIndex, setLastItemIndex] = useState(4)

  useEffect(() => {
    if (carouselType === 'outfit') {
      setLastItemIndex(3)
    }
  }, [items])

  const handleForwardClick = () => {
    console.log('clicked!')
    // check if more items
    if (items.length > lastItemIndex) {
      setfirstItemIndex(firstItemIndex + 1)
      setLastItemIndex(lastItemIndex + 1)
    }
  }

  const handleBackwardClick = () => {
    // check if firstItemIndex > 0
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
            />
          );
        }
      })
    }

    {carouselType === 'outfit' &&
      <>
        <AddToOutfitCard currentProductData={currentProductData} handleAddOutfit={handleAddOutfit} currentProductID={currentProductID} />
        {items.length > 0 &&
          items.map((cardID, index) => {
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
                />
              );
            }
          })
        }
      </>
    }

      <div className='arrow arrow-left' onClick={handleBackwardClick}>{'<'}</div>
      <div className='arrow arrow-right' onClick={handleForwardClick}>{'>'}</div>
    </div>
  );
}

export default Carousel;
