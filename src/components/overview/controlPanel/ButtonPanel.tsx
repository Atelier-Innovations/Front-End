import React from 'react';

const ButtonPanel: React.FC = (props) => {

  return (
    <div className="controls">
      <div className="row-1">
        <select className="size-button">
          <option>Select Size</option>
        </select>
        <select className="quantity"></select>
      </div>
      <div className="row-2">
        <button className="add-to-bag">Add To Bag</button>
        <button className="favorite">*</button>
      </div>
    </div>
  )
}

export default ButtonPanel;