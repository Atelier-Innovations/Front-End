import React from 'react';


interface StaticInfoProps {
  product: {
    category: string,
    name: string,
    default_price: string
  },
  currentStyle: {
    sale_price: string,
    original_price: string
  }

}

const StaticInfoDisplay: React.FC<StaticInfoProps> = (props) => {
  return (
    <div className="static-info">
      <div className="stars">STARS</div>
      <h3>{props.product.category}</h3>
      <h2>{props.product.name}</h2>
      {props.currentStyle.sale_price ?
      <>
        <p className="on-sale">${props.currentStyle.original_price}</p>
        <p>${props.currentStyle.sale_price} SALE!!!</p>
      </> :
      <p>${props.currentStyle.original_price}</p>}

    </div>
  )
}

export default StaticInfoDisplay;