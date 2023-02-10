import React, { FC } from 'react';
import { useState } from 'react';

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

  const sorter = (a, b) => {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    return
  }

  const reviewSorter = (displayedReviews) => {
    let unsortedReviews;
    if (displayedReviews) {
      unsortedReviews = JSON.parse(JSON.stringify(displayedReviews));
    }

    let sorted = unsortedReviews.sort(sorter)
    setDisplayedReviews(sorted)
  }

  // console.log(displayedReviews.sort(reviewSorter))

  // console.log(reviewSorter(displayedReviews))

  // const filterOut = (filteredReviews, displayedReviews) => {
  //   for (let i = 0; i < filteredReviews.fiveStar.length; i++) {
  //     for (let k = 0; k < displayedReviews.length; k++) {
  //       if (filteredReviews[i] === displayedReviews[k]) {
  //         console.log('test', displayedReviews[k])
  //       }
  //     }
  //   }
  // }

  const fiveStarFilter = (event) => {
    if (displayedReviews.length === 0) {
      setDisplayedReviews(currentReviews.results)
      return;
    }
    if (displayedReviews.toString() === currentReviews.results.toString()) {
      setDisplayedReviews(filteredReviews.fiveStar)
    } else if (displayedReviews.toString() !== currentReviews.results.toString() && displayedReviews.filter((review) => {return review.rating === 5}).length === 0) {
      reviewSorter([...displayedReviews, ...filteredReviews.fiveStar])
    }
    if (displayedReviews.filter((review) => {return review.rating === 5}).length !== 0 && displayedReviews.filter((review) => {return review.rating !== 5}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }

  // else if (displayedReviews.filter((review) => {return review.rating === 1}) && displayedReviews.filter((review) => {return review.rating !== 1}).length !== 0) {
  //   console.log('test')
  // }


  // console.log(reviewSorter(displayedReviews))

  // console.log("test UPdated", displayedReviews)

  const fourStarFilter = (event) => {
    if (displayedReviews.length === 0) {
      setDisplayedReviews(currentReviews.results)
      return;
    } else if (displayedReviews.toString() === currentReviews.results.toString()) {
      setDisplayedReviews(filteredReviews.fourStar)
    } else if (displayedReviews.toString() !== currentReviews.results.toString() && displayedReviews.filter((review) => {return review.rating === 4}).length === 0) {
      reviewSorter([...displayedReviews, ...filteredReviews.fourStar])
    }
    if (displayedReviews.filter((review) => {return review.rating === 4}).length !== 0 && displayedReviews.filter((review) => {return review.rating !== 4}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }

  const threeStarFilter = (event) => {
    if (displayedReviews.length === 0) {
      setDisplayedReviews(currentReviews.results)
      return;
    } else if (displayedReviews.toString() === currentReviews.results.toString()) {
      setDisplayedReviews(filteredReviews.threeStar)
    } else if (displayedReviews.toString() !== currentReviews.results.toString() && displayedReviews.filter((review) => {return review.rating === 3}).length === 0) {
      reviewSorter([...displayedReviews, ...filteredReviews.threeStar])
    }
    if (displayedReviews.filter((review) => {return review.rating === 3}).length !== 0 && displayedReviews.filter((review) => {return review.rating !== 3}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }

  const twoStarFilter = (event) => {
    if (displayedReviews.length === 0) {
      setDisplayedReviews(currentReviews.results)
      return;
    } else if (displayedReviews.toString() === currentReviews.results.toString()) {
      setDisplayedReviews(filteredReviews.twoStar)
    } else if (displayedReviews.toString() !== currentReviews.results.toString() && displayedReviews.filter((review) => {return review.rating === 2}).length === 0) {
      reviewSorter([...displayedReviews, ...filteredReviews.twoStar])
    }
    if (displayedReviews.filter((review) => {return review.rating === 2}).length !== 0 && displayedReviews.filter((review) => {return review.rating !== 2}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }

  const oneStarFilter = (event) => {
    if (displayedReviews.length === 0) {
      setDisplayedReviews(currentReviews.results)
      return;
    }
    if (displayedReviews.toString() === currentReviews.results.toString()) {
      setDisplayedReviews(filteredReviews.oneStar)
    } else if (displayedReviews.toString() !== currentReviews.results.toString() && displayedReviews.filter((review) => {return review.rating === 1}).length === 0) {
      reviewSorter([...displayedReviews, ...filteredReviews.oneStar])
    }
    if (displayedReviews.filter((review) => {return review.rating === 1}).length !== 0 && displayedReviews.filter((review) => {return review.rating !== 2}).length === 0) {
      setDisplayedReviews(currentReviews.results)
    }
  }

  const removeFiltersOnClick = () => {
    setDisplayedReviews(currentReviews.results)
  }

  const removeFilters = (displayedReviews, currentReviews) => {
    if (displayedReviews && currentReviews.results) {
      if (displayedReviews.toString() !== currentReviews.results.toString()) {
        return <button onClick={ removeFiltersOnClick() } className='remove-filters-text-button'>Remove All Filters</button>
      } else {
        return <div className='filters-note'>Filter By Star Count</div>
      }

    }

  }

  // console.log(isFiltered)

  return (
    <div className="filter-by-star">
      <div className="ratings-breakdown-title">Ratings Breakdown</div>
      {/* {removeFilters(displayedReviews, currentReviews)} */}
      <div className="five stars">
        <div className="review-subtotal">{ ratings && ratings['5']  }</div>
        <button onClick={ fiveStarFilter } className='text-button'> 5 Stars</button>
        <progress value={ ratings && ratings['5'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="four stars">
        <div className="review-subtotal">{ratings && ratings['4']}</div>
        <button onClick={ fourStarFilter } className='text-button'> 4 Stars</button>
        <progress  value={ ratings && ratings['4'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="three stars">
        <div className="review-subtotal">{ratings && ratings['3']}</div>
        <button onClick={ threeStarFilter } className='text-button'> 3 Stars</button>
        <progress  value={ ratings && ratings['3'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="two stars">
        <div className="review-subtotal">{ratings && ratings['2']}</div>
        <button onClick={ twoStarFilter } className='text-button'> 2 Stars</button>
        <progress  value={ ratings && ratings['2'] } max={ totalRatings(ratings) }></progress>
      </div>
      <div className="one stars">
        <div className="review-subtotal">{ratings && ratings['1']}</div>
        <button onClick={ oneStarFilter } className='text-button'> 1 Stars</button>
        <progress  value={ ratings && ratings['1'] } max={ totalRatings(ratings) }></progress>
      </div>
    </div>
  )
}

export default StarChart;

