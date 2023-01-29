import React from 'react';

const ButtonPanel: React.FC = (props) => {

  return (
    <div className="controls">
      <div className="row-1">
        <div className="size-button">Select Size</div>
        <div className="quantity">1</div>
      </div>
      <div className="row-2">
        <div className="add-to-bag">Add to Bag</div>
        <div className="favorite">*</div>
      </div>
    </div>
  )
}

export default ButtonPanel;