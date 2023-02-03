import React from 'react';
import ImageThumbnail from './ImageThumbnail';
const up = require('../../../icons/arrow-up-solid.svg');
const down = require('../../../icons/arrow-down-solid.svg');

interface ImageCarouselProps {
  style: {
    photos: Array<string>,

  },
  changeImage: (id: string) => void,
  currentImage: number
}

const ImageCarousel: React.FC<ImageCarouselProps> = (props: ImageCarouselProps) => {
  // const [firstImage, setFirstImage] = React.useState(null);
  // const [lastImage, setLastImage] = React.useState(null);
  const [allImages, setAllImages] = React.useState([]);
  const [displayedImages, setDisplayedImages] = React.useState([]);
  // const [currentThumbnail, setCurrentThumbnail] = React.useState(0);

  React.useEffect( () => {
    const photos = props.style.photos;
    if (photos) {

      setAllImages(photos);
      setDisplayedImages(photos.length >= 7 ?
                         Array.from(Array(7).keys()) :
                         Array.from(Array(photos.length - 1).keys()));
    }
  }, [props.style])

  const handleThumbnailClick = event => {
    props.changeImage(Number(event.target.id));
  }

  const handleUp = event => {
    let newImage = props.currentImage - 1;
    if (newImage < 0) {
      newImage = allImages.length - 1;
    }
    props.changeImage(newImage);

    if (displayedImages.indexOf(newImage) === -1) {
      let newDisplayedImages = displayedImages.slice(0, displayedImages.length - 1);
      newDisplayedImages.unshift(newImage);
      setDisplayedImages(newDisplayedImages);
    }
  };

  const handleDown = event => {
    let newImage = props.currentImage + 1;
    if (newImage > allImages.length - 1) {
      newImage = 0;
    }
    props.changeImage(newImage);

    if (displayedImages.indexOf(newImage) === -1) {
      let newDisplayedImages = displayedImages.slice(1);
      newDisplayedImages.push(newImage);
      setDisplayedImages(newDisplayedImages);
    }
  };

  return (
    <div className="image-carousel">
      <img src={up} className="small-arrow up"
                    onClick={handleUp} />
      {displayedImages.map( (index) => {

          return (
            <ImageThumbnail image={allImages[index].thumbnail_url}
                            key={index}
                            onClick={handleThumbnailClick}
                            id={index}
                            selected={props.currentImage === index ? true : false} />
          )
      })}
      <img src={down} className="small-arrow down"
                      onClick={handleDown} />
    </div>
  )
}

export default ImageCarousel;