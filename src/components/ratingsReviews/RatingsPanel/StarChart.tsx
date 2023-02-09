import React, { FC } from 'react';

interface StarChartProps {
  ratings: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  setDisplayedReviews: Function;
  filteredReviews: {
    oneStar?: Array<object>;
    twoStar?: Array<object>;
    threeStar?: Array<object>;
    fourStar?: Array<object>;
    fiveStar?: Array<object>;
  };
  currentReviews: {
    results?: [];
  };
  displayedReviews: Array<object>
};

const StarChart: FC<StarChartProps> = ({ ratings, setDisplayedReviews, filteredReviews, currentReviews, displayedReviews }) => {

  const totalRatings = (ratings:object) => {
    if (ratings === undefined) {
      return;
    }
    return Number(ratings['1']) + Number(ratings['2']) + Number(ratings['3']) + Number(ratings['4']) + Number(ratings['5']);
  }

  const reviewSorter = (displayedReviews) => {
    console.log(displayedReviews);
    var sortedReviews = displayedReviews.sort((r1, r2) => (r1.rating - r2.rating) ? -1: 1)
    console.log('sorted', sortedReviews)
    setDisplayedReviews(sortedReviews);
  }

  // const filterOut = (filteredReviews, displayedReviews) => {
  //   for (let i = 0; i < filteredReviews.fiveStar.length; i++) {
  //     for (let k = 0; k < displayedReviews.length; k++) {
  //       if (filteredReviews.fiveStar[i] === displayedReviews[k]) {
  //         console.log('test', displayedReviews[k])
  //       }
  //     }
  //   }
  // }

  const fiveStarFilter = (event) => {
    if (displayedReviews.toString() === currentReviews.results.toString()) {
      // console.log('displayed from stars before setState', filteredReviews.fiveStar)
      // console.log('current reviews', currentReviews)
      // console.log('displayed before state change', displayedReviews)
      setDisplayedReviews(filteredReviews.fiveStar)
    } else {
      setDisplayedReviews([
        ...displayedReviews,
        ...filteredReviews.fiveStar
      ])
    }
    if (displayedReviews.filter((review) => {return review.rating === 5}) && displayedReviews.filter((review) => {return review.rating !== 5}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }

  // else if (displayedReviews.filter((review) => {return review.rating === 1}) && displayedReviews.filter((review) => {return review.rating !== 1}).length !== 0) {
  //   console.log('test')
  // }


  // console.log(reviewSorter(displayedReviews))

  // console.log("test UPdated", displayedReviews)

  const fourStarFilter = (event) => {
    if (displayedReviews.toString() === currentReviews.results.toString()) {
      setDisplayedReviews(filteredReviews.fourStar)
    } else {
      setDisplayedReviews([
        ...displayedReviews,
        ...filteredReviews.fourStar
      ])

    }
    if (displayedReviews.filter((review) => {return review.rating === 4}) && displayedReviews.filter((review) => {return review.rating !== 4}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }

  const threeStarFilter = (event) => {
    if (displayedReviews.toString() === currentReviews.results.toString()) {
      setDisplayedReviews(filteredReviews.threeStar)
    } else {
      setDisplayedReviews([
        ...displayedReviews,
        ...filteredReviews.threeStar
      ])

    }
    if (displayedReviews.filter((review) => {return review.rating === 3}) && displayedReviews.filter((review) => {return review.rating !== 3}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }

  const twoStarFilter = (event) => {
    if (displayedReviews.toString() === currentReviews.results.toString()) {
      setDisplayedReviews(filteredReviews.twoStar)
    } else {
      setDisplayedReviews([
        ...displayedReviews,
        ...filteredReviews.twoStar
      ])
    }
    if (displayedReviews.filter((review) => {return review.rating === 2}) && displayedReviews.filter((review) => {return review.rating !== 2}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }

  const oneStarFilter = (event) => {
    if (displayedReviews.toString() === currentReviews.results.toString()) {
      setDisplayedReviews(filteredReviews.oneStar)
    } else {
      setDisplayedReviews([
        ...displayedReviews,
        ...filteredReviews.oneStar
      ])
    }
    if (displayedReviews.filter((review) => {return review.rating === 2}) && displayedReviews.filter((review) => {return review.rating !== 2}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }


  return (
    <div className="filter-by-star">
      <div className="five stars">
        <button onClick={ fiveStarFilter } className='text-button'> 5 Stars</button>
        <progress  value={ ratings && ratings['5'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="four stars">
        <button onClick={ fourStarFilter } className='text-button'> 4 Stars</button>
        <progress  value={ ratings && ratings['4'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="three stars">
        <button onClick={ threeStarFilter } className='text-button'> 3 Stars</button>
        <progress  value={ ratings && ratings['3'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="two stars">
        <button onClick={ twoStarFilter } className='text-button'> 2 Stars</button>
        <progress  value={ ratings && ratings['2'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="one stars">
        <button onClick={ oneStarFilter } className='text-button'> 1 Stars</button>
        <progress  value={ ratings && ratings['1'] } max={ totalRatings(ratings) }></progress>
      </div>
    </div>
  )
}

export default StarChart;

