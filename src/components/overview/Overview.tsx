import React from 'react';
import Banner from './Banner';
import ImageGallery from './imageGallery/ImageGallery';
import ControlPanel from './controlPanel/ControlPanel';
import ProductDescriptionPanel from './ProductDescriptionPanel';
import Axios from 'axios';

interface OverviewProps {
  currentProductID: string
}

const Overview: React.FC<OverviewProps> = (props: OverviewProps) => {

  React.useEffect(() => {

  })

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

export default Overview;