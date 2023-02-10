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
  };
  productName: string
}


const RatingsReviews: FC<RatingsReviewsProps> = (props) => {
  const [ currentReviews, setCurrentReviews ] = useState({})
  const [ filteredReviews, setFilteredReviews ] = useState({})
  const [ displayedReviews, setDisplayedReviews ] = useState([])
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
    axios.get(`/reviews?id=${props.currentProductID}&sort=${sort}&count=${reviewCount}`)
      .then((results) => {
        setCurrentReviews(results.data);
        setDisplayedReviews(results.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getReviewData();
  }, [sort, props.currentProductID, reviewCount])

  useEffect(() => {
    filterReviews(currentReviews)
  }, [currentReviews, reviewCount])

  const filterReviews = (currentReviews) => {
    if (currentReviews.results === undefined) {
      return null;
    };

    let filteredReviews = {
      oneStar: [],
      twoStar: [],
      threeStar: [],
      fourStar: [],
      fiveStar: []
    }

    for (let i = 0; i < currentReviews.results.length; i++) {
      var review = currentReviews.results[i];
      if (review.rating === 1) {
        filteredReviews.oneStar.push(review);
      } else if (review.rating === 2) {
        filteredReviews.twoStar.push(review);
      } else if (review.rating === 3) {
        filteredReviews.threeStar.push(review);
      } else if (review.rating === 4) {
        filteredReviews.fourStar.push(review);
      } else if (review.rating === 5) {
        filteredReviews.fiveStar.push(review);
      }
    }
    setFilteredReviews(filteredReviews)
  }

  // console.log(filteredReviews)
  // console.log('displayed',displayedReviews)

  // console.log('MetaData from R/R:', props.productMetaData)
  // console.log('Current Reviews from R/R:', currentReviews)


  return (
    <div id="reviews-ratings" className="widget reviews-ratings">
      <div className="banner">
        <h2>RATINGS & REVIEWS</h2>
      </div>

      <div className="overall">
        < RatingsList productMetaData={ props.productMetaData } setDisplayedReviews={ setDisplayedReviews } displayedReviews={ displayedReviews }filteredReviews={ filteredReviews } currentReviews={ currentReviews }/>
        < ReviewList reviewCount={ reviewCount } setReviewCount={ setReviewCount } sort={ sort } setSort={ setSort } displayedReviews={ displayedReviews } currentReviews={ currentReviews } productMetaData={ props.productMetaData } newReview={newReview} makeNewReview={ makeNewReview } getReviewData={ getReviewData } productName={props.productName}/>
      </div>
    </div>
  )
}

export default RatingsReviews;