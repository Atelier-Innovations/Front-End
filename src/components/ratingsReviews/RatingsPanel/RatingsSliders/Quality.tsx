import React, { FC } from 'react';

interface QualityProps{
  position: {
    id: number;
    value: string;
  }
}

const Quality: FC<QualityProps>= ({ position }) => {

  const pointerPosition = (position) => {
    if (!position) {
      return;
    }
    return position.value + "%";
  }

  return (
    <div className="ratings-sliders">
      <span className="slider-title">Quality</span>
      <div className="slider">
        <div className="bar4"></div>
        <div className="bar4"></div>
        <div className="bar4"></div>
        <div className="bar4"></div>
        <div className="pointer" style={{
          position: "absolute",
          left: `${pointerPosition(position)}`,
        }}>&#9660;</div>
      </div>
      <div className="slider-tags">
          <div>Poor</div> <div>Perfect</div>
      </div>
  </div>
  )
}


export default Quality;