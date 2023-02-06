import React, { FC } from 'react';

interface LengthProps{
  position: {
    id: number;
    value: string;
  }
}

const Length: FC<LengthProps> = ({ position }) => {

  const pointerPosition = (position) => {
    if (!position) {
      return;
    }
    return position.value + "%";
  }

  console.log(typeof pointerPosition(position))


  return (
    <div className="ratings-sliders">
    <span className="slider-title">Length</span>
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
        <div>Too Short</div> <div>Perfect</div> <div>Too Long</div>
    </div>
  </div>
  )
}


export default Length