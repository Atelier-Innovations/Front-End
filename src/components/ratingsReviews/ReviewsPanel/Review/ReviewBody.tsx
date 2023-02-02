import React, { FC } from 'react';

interface ReviewBodyProps {
  body: string;
}


const ReviewBody: FC<ReviewBodyProps> = ({ body }) => {

  // console.log(body)
  return (
    <div className="review-body">
      { body}
    </div>
  )
}


export default ReviewBody