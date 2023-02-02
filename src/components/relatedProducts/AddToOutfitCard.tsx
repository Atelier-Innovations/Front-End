import React, { FC } from 'react';


const AddToOutfitCard = ({currentProductData, handleAddOutfit, currentProductID}) => {
  return (

    <div className='card add_to_outfit_card' onClick={() => handleAddOutfit(currentProductID)}>
      <div className='plus_sign'>+</div>
      <p>Add <strong>{currentProductData.name}</strong> to your outfit collection!</p>
    </div>
  )
}

export default AddToOutfitCard;