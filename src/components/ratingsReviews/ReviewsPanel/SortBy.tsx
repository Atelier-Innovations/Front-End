import React, { FC } from 'react';

interface SortByProps {
  setSort: Function;
  sort: string;
  ratings: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  }
};

const SortBy: FC<SortByProps> = ({ setSort, sort, ratings }) => {


  // need to somehow sort through all reviews on all pages?
  // current route for default page display only produces two reviews, is it currentlly sorting those properly? need more test cases
  const totalRatings = (ratings: object) => {
    if (ratings === undefined) {
      return;
    }
    return Number(ratings['1']) + Number(ratings['2']) + Number(ratings['3']) + Number(ratings['4']) + Number(ratings['5']);
  }


  // figure out correct type for event
  const onSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(event.target.value)
    let sortMethod = event.target.value
    setSort(sortMethod)
    }

  return (
    <div className="sort-by">
      {totalRatings(ratings)} reviews, sorted by &nbsp;
      <select onChange={ onSortChange } name="sort-selector" id="sorter" value={ sort }>
        <option value="relevant">relevance</option>
        <option value="helpful">helpfulness</option>
        <option value="newest">most recent</option>
      </select>
    </div>
  )
}


export default SortBy;