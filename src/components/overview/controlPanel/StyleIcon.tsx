import React from 'react';

interface StyleIconProps {
  style: object,
  selected: boolean
}

const StyleIcon: React.FC = (props) => {

  return (
    <img src={props.style.photos[0].thumbnail_url}
         className={props.selected ? 'circle selected' : 'circle'}
         onClick={props.handleClick}
         id={props.index} />
  )
}

export default StyleIcon;