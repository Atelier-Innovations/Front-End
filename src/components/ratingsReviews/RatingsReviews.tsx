import React, { FC } from 'react';
import ReviewList from './ReviewsPanel/ReviewList'
import RatingsList from './RatingsPanel/RatingsList';
import axios from 'axios';
import { useState, useEffect } from 'react'


interface RatingsReviewsProps {
  currentProductID: string
  productMetaData: {
    characteristics?: object;
    product_id?: number;
    ratings?: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    recommended?: object;
  }
}


const RatingsReviews: FC<RatingsReviewsProps> = (props) => {
  const [ currentReviews, setCurrentReviews ] = useState({})
  const [ sort, setSort ] = useState('relevant')
  const [ reviewCount, setReviewCount ] = useState(2);
  const [ newReview, makeNewReview] = useState({
      "product_id": Number(props.currentProductID),
      "rating": 3.5,
      "summary": '',
      "body": '',
      "recommend": false,
      "name": '',
      "email": '',
      "photos": [],
      "characteristics": {}
        // "125033": 3,
        // "125031": 3,
        // "125032": 3,
        // "125034": 3

  })


  const getReviewData = () => {
    axios.get(`http://localhost:6969/reviews?id=${props.currentProductID}&sort=${sort}&count=${reviewCount}`)
      .then((results) => {
        setCurrentReviews(results.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getReviewData();
  }, [sort, props.currentProductID, reviewCount])

  // console.log('MetaData from R/R:', props.productMetaData)
  // console.log('Current Reviews from R/R:', currentReviews)


  return (
    <div id="reviews-ratings" className="widget reviews-ratings">
      <div className="banner">
        RATINGS & REVIEWS
      </div>

      <div className="overall">
        < RatingsList productMetaData={ props.productMetaData }/>
        < ReviewList reviewCount={ reviewCount } setReviewCount={ setReviewCount } sort={ sort } setSort={ setSort } currentReviews={ currentReviews } productMetaData={ props.productMetaData } newReview={newReview} makeNewReview={ makeNewReview } getReviewData={ getReviewData }/>
      </div>
    </div>
  )
}

export default RatingsReviews;