import React from 'react';
import ImageThumbnail from './ImageThumbnail';
const up = require('../../../icons/arrow-up-solid.svg');
const down = require('../../../icons/arrow-down-solid.svg');

interface ImageCarouselProps {
  style: {
    photos: Array<string>,
    changeImage: (id: string) => void
  }
}

const ImageCarousel: React.FC<ImageCarouselProps> = (props: ImageCarouselProps) => {
  const [firstImage, setFirstImage] = React.useState(null);
  const [lastImage, setLastImage] = React.useState(null);
  const [images, setImages] = React.useState([]);
  const [currentThumbnail, setCurrentThumbnail] = React.useState(0);

  React.useEffect( () => {
    if (props.style.photos) {
      setFirstImage(0);
      setLastImage(
        props.style.photos.length >= 7 ? 6 : props.style.photos.length - 1
      );
      setImages(props.style.photos);
      setCurrentThumbnail(0);
    }
  }, [props.style])

  const handleThumbnailClick = event => {
    props.changeImage(event.target.id);
    setCurrentThumbnail(Number(event.target.id));
  }
  return (
    <div className="image-carousel">
      <img src={up} className="small-arrow up" />
      {images.map( (image, index) => {
        if (index >= firstImage && index <= lastImage) {
          return (
            <ImageThumbnail image={image.thumbnail_url}
                            key={index}
                            onClick={handleThumbnailClick}
                            id={index}
                            selected={currentThumbnail === index ? true : false} />
          )
        }
      })}
      <img src={down} className="small-arrow down" />
    </div>
  )
}

export default ImageCarousel;