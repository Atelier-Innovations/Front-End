import React from 'react';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
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

const ImageCarousel: FC<ImageCarouselProps> = (props: ImageCarouselProps) => {

  const [allImages, setAllImages] = useState([]);

  useEffect( () => {
    const photos = props.style.photos;
    if (photos) {

      setAllImages(photos);

    }

  }, [props.style, props.zoomed])

  const handleThumbnailClick = event => {
    props.changeImage(Number(event.target.id));
  }

  const handleUp = event => {
    let newImage = props.displayedImages[0] - 1;
    if (newImage < 0) {
      newImage = allImages.length - 1;
    }

    let newDisplayedImages = props.displayedImages.slice(0, props.displayedImages.length - 1);
    newDisplayedImages.unshift(newImage);
    props.setDisplayedImages(newDisplayedImages);
  };

  const handleDown = event => {
    let newImage = props.displayedImages[props.displayedImages.length - 1] + 1;
    if (newImage > allImages.length - 1) {
      newImage = 0;
    }

    let newDisplayedImages = props.displayedImages.slice(1);
    newDisplayedImages.push(newImage);
    props.setDisplayedImages(newDisplayedImages);
  };

  return (
    <div className={props.imageExpanded ?
    "image-carousel icon-mode " + (props.zoomed ? "zoomed" : "") : "image-carousel"}>

      {!props.zoomed ? <img src={up} className="small-arrow up"
                    onClick={handleUp} /> : null}

      {!props.zoomed ? props.displayedImages.map( (index) => {

          return (
            <ImageThumbnail image={allImages[index].thumbnail_url}
                            key={index}
                            onClick={handleThumbnailClick}
                            id={index}
                            selected={props.currentImage === index ? true : false}
                            icon={props.imageExpanded} />
          )
      }) : null}
      {!props.zoomed ? <img src={down} className="small-arrow down"
                      onClick={handleDown} /> : null}
    </div>
  )
}

export default ImageCarousel;