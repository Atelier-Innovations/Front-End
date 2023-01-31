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
  console.log(props.currentStyle.sale_price);
  return (
    <div className="static-info">
      <div className="stars">STARS</div>
      <h3>{props.product.category}</h3>
      <h2>{props.product.name}</h2>
      <p>${props.currentStyle.sale_price ?
      props.currentStyle.sale_price : props.currentStyle.original_price}</p>
    </div>
  )
}

export default StaticInfoDisplay;