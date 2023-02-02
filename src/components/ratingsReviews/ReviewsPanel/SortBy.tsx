import React, { FC } from 'react';

interface SortByProps {
  setSort: Function;
};

const SortBy: FC<SortByProps> = ({ setSort }) => {


  // need to somehow sort through all reviews on all pages?
  // current route for default page display only produces two reviews, is it currentlly sorting those properly? need more test cases


  // figure out correct type for event
  const onSortChange = (event) => {
    // console.log(event.target.value)
    setSort(event.target.value)
  }

  return (
    <div className="sort-by">
      ### reviews, sorted by &nbsp;
      <select onChange={ onSortChange } name="sort-selector" id="sorter">
        <option value="relevant">relevance</option>
        <option value="helpful">helpfulness</option>
        <option value="newest">most recent</option>
      </select>
    </div>
  )
}


export default SortBy;