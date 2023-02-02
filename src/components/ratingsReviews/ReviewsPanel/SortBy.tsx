import React, { FC } from 'react';

interface SortByProps {
  sort: string;
  setSort: Function;
};

const SortBy: FC<SortByProps> = (props) => {

  return (
    <div className="sort-by">
      ### reviews, sorted by relevance, helpfulness, most recent
    </div>
  )
}


export default SortBy;