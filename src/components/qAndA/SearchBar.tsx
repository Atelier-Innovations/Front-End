import React, { FC } from 'react';
import {useState, useEffect} from 'react';

interface SearchBarProps {
}

const SearchBar: FC<SearchBarProps> = (props: any) => {
  const [searchInput, setSearchInput] = useState("");
  const handleInputChange = ((e) => {
    // console.log(e.target.value);
    setSearchInput(e.target.value);
  })
  const handleSearchClick = ((e) => {
    // console.log(e.target.value);
    // check question list and see if it includes current searchInput text
  })

  return (
    <div className="search-bar">
    <input name="search-bar-text" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
    onChange={handleInputChange}/>
    <button className="search-button" onClick={handleSearchClick}>Search</button>
    </div>
  )
}

export default SearchBar;