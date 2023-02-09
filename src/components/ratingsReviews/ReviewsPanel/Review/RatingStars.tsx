import React, { FC } from 'react';
import { Rating } from 'react-simple-star-rating';



// https://www.npmjs.com/package/react-simple-star-rating



interface RatingStarsProps {
  rating: number;
};

const RatingStars: FC<RatingStarsProps> = ({ rating }) => {

  const starCount = (rating: number) => {
    let stars:string = ''
    for (let i = 0; i < rating; i++) {
      stars += '*';
    }
    return stars;
  }



  return (
    <div className="review-rating">
      < Rating z-index="0.5" readonly={true} initialValue={ rating } size={ 18 } fillColor="#525252" emptyColor="#00000040" />
    </div>
  )
}

export default RatingStars;