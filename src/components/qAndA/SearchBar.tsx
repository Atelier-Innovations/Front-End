import React, { FC } from 'react';

interface SearchBarProps {
}

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="search-bar">
    <input name="search-bar-text" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
    <button className="search-button">Search</button>
    </div>
  )
}

export default SearchBar;