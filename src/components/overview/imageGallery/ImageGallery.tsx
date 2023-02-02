import React from 'react';
import ImageCarousel from './ImageCarousel';
const expand = require('../../../icons/expand-solid.svg');
const left = require('../../../icons/arrow-left-solid.svg');
const right = require('../../../icons/arrow-right-solid.svg');

interface ImageGalleryProps {
  style: object
}

const ImageGallery: React.FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
  // const [currentImageURL, setCurrentImageURL] = React.useState('');
  const [imageList, setImageList] = React.useState([]);
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect( () => {
    if (props.style.photos) {
      // setCurrentImageURL(props.style.photos[0].url
      setImageList(props.style.photos);
      setCurrentImage(0);
    }
  }, [props.style])

  const changeImage = (id) => {
    // setCurrentImageURL(props.style.photos[id].url)
    setCurrentImage(id);
  }

  const handleRight = event => {

  }

  return (
    <div className="image-gallery">
      <img className="expand-icon" src={expand} />
      <img className="arrow left" src={left} />
      <img className="arrow right" src={right} onClick={handleRight} />
      {imageList.length > 0 ?
      <img className="big-image" src={imageList[currentImage].url} />  : null}
      <ImageCarousel style={props.style} changeImage={changeImage} />
    </div>
  );
}

export default ImageGallery;