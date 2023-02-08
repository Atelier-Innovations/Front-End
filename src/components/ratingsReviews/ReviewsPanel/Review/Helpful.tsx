import React, { FC } from 'react';
import axios from 'axios';

interface HelpfulProps {
  helpfulness: number;
  review_id: number;
  getReviewData: Function;
};


const Helpful: FC<HelpfulProps> = ({ helpfulness, review_id, getReviewData }) => {


  const helpfulOnClick = (event) => {
    axios.put('http://localhost:6969/reviews/helpful', {
      review_id: review_id
    })
      .then((result) => {
        // console.log(result);
        getReviewData();
      })
      .catch((err) => {
        console.log(err)
      })
  }



  return (
    <div className="helpful">
      Helpful? <button onClick={ helpfulOnClick }className="helpful text-button">Yes</button> ({helpfulness}) | <button className="report text-button">Report</button>
    </div>
  )
}



export default Helpful;