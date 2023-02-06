import React, { FC } from 'react';

interface SizeProps{
  position: {
    id: number;
    value: string;
  }
}

const Size: FC<SizeProps> = ({ position }) => {

  const pointerPosition = (position) => {
    if (!position) {
      return;
    }
    return position.value + "%";
  }

  return (
    <div className="ratings-sliders">
      <span className="slider-title">Size</span>
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
        <div>Too Small</div> <div>Perfect</div> <div>Too Large</div>
      </div>
  </div>
  )
}


export default Size;