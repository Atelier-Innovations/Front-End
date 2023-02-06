import React, { FC } from 'react';

interface FitProps {
  position: {
    id: number;
    value: string;
  }
}

const Fit: FC<FitProps>= ({ position }) => {

  const pointerPosition = (position) => {
    if (!position) {
      return;
    }
    return position.value + "%";
  }

  return (
    <div className="ratings-sliders">
    <span className="slider-title">Fit</span>
    <div className="slider">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="pointer" style={{
        position: "absolute",
        left: `${pointerPosition(position)}`,
      }}>V</div>
    </div>
    <div className="slider-tags">
        <div>Too Small</div> <div>Perfect</div> <div>Too Big</div>
    </div>
  </div>
  )
}


export default Fit;