import React, { FC } from 'react';


const AddToOutfitCard = ({currentProductData, handleAddOutfit, currentProductID}) => {
  return (

    <div className='card add_to_outfit_card' onClick={() => handleAddOutfit(currentProductID)}>
      <div className='plus_sign'>+</div>
      <p>Add <span className="outfit_card_product_name">{currentProductData.name}</span> to your outfit!</p>
    </div>
  )
}

export default AddToOutfitCard;