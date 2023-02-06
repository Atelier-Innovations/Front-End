import React, { FC } from 'react';

interface WidthProps{
  position: {
    id: number;
    value: string;
  }
}

const Width: FC<WidthProps> = ({ position }) => {

  const pointerPosition = (position) => {
    if (!position) {
      return;
    }
    return position.value + "%";
  }

  return (
    <div className="ratings-sliders">
      <span className="slider-title">Width</span>
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
        <div>Too Skinny</div> <div>Perfect</div> <div>Too Wide</div>
      </div>
    </div>
  )
}


export default Width;