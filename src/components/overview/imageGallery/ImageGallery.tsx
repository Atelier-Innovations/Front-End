import React from 'react';
import ImageCarousel from './ImageCarousel';

const ImageGallery: React.FC = (props) => {
  return (
    <div className="image-gallery">
      <ImageCarousel />
    </div>
  );
}

export default ImageGallery;