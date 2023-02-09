import React from 'react';


interface ImageThumbnailProps {
  image: string,
  onClick: Function,
  id: number,
  selected: boolean
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = (props: ImageThumbnailProps) => {

  const handleMove = event => {

  }

  return <div className={'box ' + (props.selected ? 'selected ' : '') +
                         (props.icon ? 'icon' : '')}
                         >
    <img src={props.image}
         onClick={props.onClick}
         id={props.id} />
  </div>
}

export default ImageThumbnail;