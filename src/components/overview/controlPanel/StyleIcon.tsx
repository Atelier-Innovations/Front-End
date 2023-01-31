import React from 'react';

interface StyleIconProps {
  style: object
}

const StyleIcon: React.FC = (props) => {

  return (
    <img src={props.style.photos[0].thumbnail_url}
         className="circle"></img>
  )
}

export default StyleIcon;