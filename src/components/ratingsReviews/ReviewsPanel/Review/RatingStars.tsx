import React, { FC } from 'react';

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
    <div>
      { starCount(rating) }
    </div>
  )
}

export default RatingStars;