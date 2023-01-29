import React from 'react';
import StyleIcon from './StyleIcon';

const StyleSelector: React.FC = (props) => {

  return (
    <div className="style-selector">
      <h3>Style Selector</h3>
      <StyleIcon />
      <StyleIcon />
      <StyleIcon />
      <StyleIcon />
      <StyleIcon />
      <StyleIcon />
      <StyleIcon />
      <StyleIcon />
    </div>
  )
}

export default StyleSelector;