import React from 'react';
import Banner from './Banner';
import ImageGallery from './imageGallery/ImageGallery';
import ControlPanel from './controlPanel/ControlPanel';
import ProductDescriptionPanel from './ProductDescriptionPanel';

export const Overview: React.FC = (props) => {

  return (
    <section className="widget overview">
      <Banner />
      <div className="main-panel">
        <ImageGallery />
        <ControlPanel />
      </div>
      <ProductDescriptionPanel />
    </section>
  )
}