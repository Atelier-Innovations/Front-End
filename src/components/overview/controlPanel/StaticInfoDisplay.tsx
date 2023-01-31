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
        <span className="on-sale">${props.currentStyle.original_price}</span>
        <span> ${props.currentStyle.sale_price} SALE!!!</span>
      </> :
      <span>${props.currentStyle.original_price}</span>}

    </div>
  )
}

export default StaticInfoDisplay;