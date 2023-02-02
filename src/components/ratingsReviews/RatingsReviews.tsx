import React, { FC } from 'react';
import ReviewList from './ReviewsPanel/ReviewList'
import RatingsList from './RatingsPanel/RatingsList';
import axios from 'axios';
import { useState, useEffect } from 'react'


interface RatingsReviewsProps {
  currentProductID: string
}

const RatingsReviews: FC<RatingsReviewsProps> = (props) => {
  const [ currentReviews, setCurrentReviews ] = useState({})
  const [ productMetaData, setProductMetaData ] = useState({})
  const [ sort, setSort ] = useState('relevant')


  const getReviewData = () => {
    axios.get(`http://localhost:6969/reviews?id=${props.currentProductID}&sort=${sort}`)
      .then((results) => {
        setCurrentReviews(results.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getRatingsData = () => {
    axios.get(`http://localhost:6969/reviews/meta?id=${props.currentProductID}`)
    .then((results) => {
      setProductMetaData(results.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getReviewData();
  }, [sort])

  useEffect(() => {
    getRatingsData();
  }, [])


  console.log(sort)

  // console.log('MetaData from R/R:', productMetaData)
  // console.log('Current Reviews from R/R:', currentReviews)


  return (
    <div className="widget reviews-ratings">
      <div className="banner">
        <strong>RATINGS & REVIEWS</strong>
      </div>

      <div className="overall">
        < RatingsList />
        < ReviewList sort={ sort } setSort={ setSort } currentReviews={ currentReviews } />
      </div>

      <div className="button-panel">
        <button>More Reviews</button>
        <button>Add A Review +</button>
      </div>



    </div>
  )
}

export default RatingsReviews;