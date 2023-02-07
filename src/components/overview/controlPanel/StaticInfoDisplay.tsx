import React from 'react';
const facebook = require('../../../icons/facebook.svg');
const instagram = require('../../../icons/instagram.svg');
const twitter = require('../../../icons/twitter.svg');
const pinterest = require('../../../icons/pinterest.svg');




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

const StaticInfoDisplay: React.FC<StaticInfoProps> = ({product, currentStyle}) => {
  return (
    <div className="static-info">
      <div className="stars">STARS</div>
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      {currentStyle.sale_price ?
      <>
        <span className="on-sale">${currentStyle.original_price}</span>
        <span className="sale"> ${currentStyle.sale_price} SALE!!!</span>
      </> :
      <span>${currentStyle.original_price}</span>}
      <ul className="social-media-icons">
        <li><img className="social-media-icon"
             src={facebook}
             height="20px"
             width="20px" /></li>
        <li><img className="social-media-icon"
             src={instagram}
             height="20px"
             width="20px" /></li>
        <li><img className="social-media-icon"
             src={twitter}
             height="20px"
             width="20px" /></li>
        <li><img className="social-media-icon"
             src={pinterest}
             height="20px"
             width="20px" /></li>
      </ul>
    </div>
  )
}

export default StaticInfoDisplay;