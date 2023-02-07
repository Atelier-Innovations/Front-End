import React from 'react';
import { useEffect, useState } from 'react';
import ImageCarousel from './ImageCarousel';
const expand = require('../../../icons/expand-solid.svg');
const left = require('../../../icons/arrow-left-solid.svg');
const right = require('../../../icons/arrow-right-solid.svg');

interface ImageGalleryProps {
  style: object
}

const ImageGallery: FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
  // const [currentImageURL, setCurrentImageURL] = useState('');
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [zoomed, setZoomed] = useState(false);
  const [zoomCoords, setZoomCoords] = useState([0, 0]);

  useEffect( () => {
    if (props.style.photos) {
      // setCurrentImageURL(props.style.photos[0].url
      setImageList(props.style.photos);
      // setCurrentImage(0);
      setDisplayedImages(props.style.photos.length >= 7 ?
        Array.from(Array(7).keys()) :
        Array.from(Array(props.style.photos.length).keys()));
    }
  }, [props.style])


  const changeImage = (id: number) => {
    // setCurrentImageURL(props.style.photos[id].url)
    setCurrentImage(id);
  }

  const toggleZoom = () => {
    setZoomed(
      zoomed ? false : true
    );
    document.getElementsByClassName('big-image')[0].style.objectPosition = '0px 0px';
  };


  const handleMouseMove = (event) => {
    setZoomCoords([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
    const gallery = document.getElementsByClassName('image-gallery')[0];
    const image = document.getElementsByClassName('big-image')[0];
    image.style.objectPosition = `-${(zoomCoords[0]/gallery.clientWidth) * (image.clientWidth - gallery.clientWidth)}px
                                  -${(zoomCoords[1]/gallery.clientHeight) * (image.clientHeight - gallery.clientHeight)}px`;
  }

  const handleRight = event => {
    let newImage = currentImage + 1;
    if (newImage > imageList.length - 1) {
      newImage = 0;
    }
    setCurrentImage(newImage);

    if (displayedImages.indexOf(newImage) === -1) {
      let newDisplayedImages = displayedImages.slice(1);
      newDisplayedImages.push(newImage);
      setDisplayedImages(newDisplayedImages);
    }
  }

  const handleLeft = event => {
    let newImage = currentImage - 1;
    if (newImage < 0) {
      newImage = imageList.length - 1;
    }
    setCurrentImage(newImage);

    if (displayedImages.indexOf(newImage) === -1) {
      let newDisplayedImages = displayedImages.slice(0, displayedImages.length - 1);
      newDisplayedImages.unshift(newImage);
      setDisplayedImages(newDisplayedImages);
    }
  }

  return (
    <div className={props.imageExpanded ?
     "image-gallery expanded" : "image-gallery"}
         onMouseMove={zoomed ? handleMouseMove : null}>
      {!zoomed ? <img className="expand-icon"
           src={expand}
           onClick={props.toggleExpanded}/> : null}
      {currentImage !== 0 && !zoomed ? <img className="arrow left" src={left}
                                 onClick={handleLeft} /> : null}
      {currentImage !== imageList.length - 1 && !zoomed ? <img className="arrow right" src={right}
                                   onClick={handleRight} /> : null}

      {imageList.length > 0 ?

      <img className={'big-image ' + (props.imageExpanded ? 'expanded ' : 'default ') +
                     (zoomed ? 'zoomed ' : '')}
           src={imageList[currentImage].url}
           onClick={props.imageExpanded ?
           toggleZoom : props.toggleExpanded} />  : null}

      <ImageCarousel style={props.style}
                     changeImage={changeImage}
                     currentImage={currentImage}
                     displayedImages={displayedImages}
                     setDisplayedImages={setDisplayedImages}
                     imageExpanded ={props.imageExpanded}
                     zoomed={zoomed} />
    </div>
  );
}

export default ImageGallery;