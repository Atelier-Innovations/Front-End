import React, { FC } from 'react';
import Comfort from './Comfort';
import Fit from './Fit';
import Length from './Length';
import Quality from './Quality';
import Width from './Width';
import Size from './Size';



// https://slider-react-component.vercel.app/demo/slider


interface SlidersProps {
  characteristics?: {
    Comfort?: {
      id: number;
      value: string;
    }
    Fit?: {
      id: number;
      value: string;
    }
    Length?: {
      id: number;
      value: string;
    }
    Quality?: {
      id: number;
      value: string;
    }
    Width?: {
      id: number;
      value: string;
    }
    Size?: {
      id: number;
      value: string;
    }
  };
}

const Sliders: FC<SlidersProps> = ({ characteristics }) => {
  // max position for pointer(far right) is 94% width (depends on max width of screen)
  // set position based on half the width of the pointer element to center it properly

  const convertToPercent = (characteristics) => {
    console.log(characteristics)
    if (!characteristics) {
      return '';
    }

    for (let key in characteristics) {
      characteristics[key].value = (Number(characteristics[key].value) * 20).toString();
    }
    return characteristics;
  }

  let positionObject = convertToPercent(characteristics);

  const ifComfort = () => {
    if (positionObject.Comfort) {
      return < Comfort position={ positionObject.Comfort }/>
    } else {
      return null
    }
  }

  const ifFit = () => {
    if (positionObject.Fit) {
      return < Fit position={ positionObject.Fit }/>
    } else {
      return null;
    }
  }

  const ifLength = () => {
    if (positionObject.Length) {
      return < Length position={ positionObject.Length }/>
    } else {
      return null;
    }
  }

  const ifQuality = () => {
    if (positionObject.Quality) {
      return < Quality position={ positionObject.Quality }/>
    } else {
      return null;
    }
  }

  const ifWidth = () => {
    if (positionObject.Width) {
      return < Width position={ positionObject.Width }/>
    } else {
      return null;
    }
  }

  const ifSize = () => {
    if (positionObject.Size) {
      return < Size position={ positionObject.Size }/>
    } else {
      return null;
    }
  }

  return (
    <div>
      { ifComfort() }
      { ifFit() }
      { ifLength() }
      { ifQuality() }
      { ifWidth() }
      { ifSize() }
    </div>
  )
}


export default Sliders;