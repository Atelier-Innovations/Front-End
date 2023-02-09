import React from 'react';
import { Rating } from 'react-simple-star-rating';
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

const StaticInfoDisplay: React.FC<StaticInfoProps> = ({product, currentStyle, reviews}) => {
  let overallRating = 0;
  let totalReviews = 0;
  // console.log(reviews);
  if (reviews.ratings) {
    overallRating = Math.round(((Number(reviews.ratings['1']) * 1) +
                                (Number(reviews.ratings['2']) * 2) +
                                (Number(reviews.ratings['3']) * 3) +
                                (Number(reviews.ratings['4']) * 4) +
                                (Number(reviews.ratings['5']) * 5)) /
                                (Number(reviews.ratings['1']) +
                                 Number(reviews.ratings['2']) +
                                 Number(reviews.ratings['3']) +
                                 Number(reviews.ratings['4']) +
                                 Number(reviews.ratings['5'])) * 10) / 10;

    totalReviews = Number(reviews.ratings['1']) + Number(reviews.ratings['2']) +
                   Number(reviews.ratings['3']) + Number(reviews.ratings['4']) +
                   Number(reviews.ratings['5']);
  }

  return (
    <div className="static-info">

      {reviews.ratings ?
      <div className="stars">
        <Rating readonly={true}
                initialValue={overallRating}
                size={18}
                fillColor="#525252"
                emptyColor="#00000040"
                allowFraction={true} />
        <span><a href="#reviews-ratings">Read all {totalReviews} reviews</a></span>
      </div> : null}

      {product.category && <h3 className="category">{product.category.toUpperCase()}</h3>}

      <h1>{product.name}</h1>

      <div className='price'>
      {currentStyle.sale_price ?
        <>
          <span className="on-sale">${currentStyle.original_price}</span>
          <span className='sale-price'> ${currentStyle.sale_price} SALE!!!</span>
        </> :
        <span className="original-price">${currentStyle.original_price}</span>
      }
      </div>

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