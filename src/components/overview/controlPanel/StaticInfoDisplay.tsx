import React from 'react';

const StaticInfoDisplay: React.FC = (props) => {

  return (
    <div className="static-info">
      <div className="stars">STARS</div>
      <h3>Category</h3>
      <h2>Expanded Product Name</h2>
      <p>$369</p>
    </div>
  )
}

export default StaticInfoDisplay;