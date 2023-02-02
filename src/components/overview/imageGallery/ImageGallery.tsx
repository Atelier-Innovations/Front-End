import React from 'react';
import ImageCarousel from './ImageCarousel';
const expand = require('../../../icons/expand-solid.svg');

interface ImageGalleryProps {
  style: object
}

const ImageGallery: React.FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
  const [currentImage, setCurrentImage] = React.useState('');

  React.useEffect( () => {
    if (props.style.photos) {
      setCurrentImage(props.style.photos[0].url)
    }
  }, [props.style])

  return (
    <div className="image-gallery">
      <img className="expand-icon" src={expand} />
      <img src={currentImage} />
      <ImageCarousel />
    </div>
  );
}

export default ImageGallery;