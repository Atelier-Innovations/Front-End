import React from 'react';
import ImageThumbnail from './ImageThumbnail';

const ImageCarousel: React.FC = (props) => {

  return (
    <div className="image-carousel">
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
        <ImageThumbnail />
    </div>
  )
}

export default ImageCarousel;