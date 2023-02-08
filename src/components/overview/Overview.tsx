import React from 'react';
import { useState, useEffect } from 'react';
import Banner from './Banner';
import ImageGallery from './imageGallery/ImageGallery';
import ControlPanel from './controlPanel/ControlPanel';
import ProductDescriptionPanel from './ProductDescriptionPanel';
import axios from 'axios';


interface OverviewProps {
  currentProductID: string,
  currentProductData: object,
  productMetaData: object
}

const Overview: React.FC<OverviewProps> = (props: OverviewProps) => {

  const [currentStyle, setCurrentStyle] = useState({});
  const [styleList, setStyleList] = useState({results: []});
  const [imageExpanded, setImageExpanded] = useState(false);

  const toggleExpanded = () => {
    setImageExpanded(
      imageExpanded ? false : true
    );
  };

  useEffect(() => {
    axios(`http://localhost:6969/products/${props.currentProductID}/styles`)
    .then( results => {
      setStyleList(results.data);
      setCurrentStyle(results.data.results[0]);
    })
    .catch(err => {
      console.log(err);
    })
  }, [props.currentProductID])

  return (
    <section className="widget overview">
      <Banner />
      <div className="main-panel">
          <ImageGallery style={currentStyle}
                        imageExpanded={imageExpanded}
                        toggleExpanded={toggleExpanded}/>

        {imageExpanded ? null :
        <ControlPanel product={props.currentProductData}
                      currentStyle={currentStyle}
                      styleList={styleList}
                      setCurrentStyle={setCurrentStyle}
                      productMetaData={props.productMetaData} />}
      </div>
      <ProductDescriptionPanel currentStyle={currentStyle}
                               product={props.currentProductData}/>
    </section>
  )
}

export default Overview;