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

  const [allImages, setAllImages] = React.useState([]);

  React.useEffect( () => {
    const photos = props.style.photos;
    if (photos) {

      setAllImages(photos);

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

    if (props.displayedImages.indexOf(newImage) === -1) {
      let newDisplayedImages = props.displayedImages.slice(0, props.displayedImages.length - 1);
      newDisplayedImages.unshift(newImage);
      props.setDisplayedImages(newDisplayedImages);
    }
  };

  const handleDown = event => {
    let newImage = props.currentImage + 1;
    if (newImage > allImages.length - 1) {
      newImage = 0;
    }
    props.changeImage(newImage);

    if (props.displayedImages.indexOf(newImage) === -1) {
      let newDisplayedImages = props.displayedImages.slice(1);
      newDisplayedImages.push(newImage);
      props.setDisplayedImages(newDisplayedImages);
    }
  };

  return (
    <div className={props.imageExpanded ?
    "image-carousel icon-mode" : "image-carousel"}>

      <img src={up} className="small-arrow up"
                    onClick={handleUp} />
      {props.displayedImages.map( (index) => {

          return (
            <ImageThumbnail image={allImages[index].thumbnail_url}
                            key={index}
                            onClick={handleThumbnailClick}
                            id={index}
                            selected={props.currentImage === index ? true : false}
                            icon={props.imageExpanded} />
          )
      })}
      <img src={down} className="small-arrow down"
                      onClick={handleDown} />
    </div>
  )
}

export default ImageCarousel;