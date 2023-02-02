import React from 'react';
import ImageThumbnail from './ImageThumbnail';

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
    </div>
  )
}

export default ImageCarousel;