import React from 'react';
import Banner from './Banner';
import ImageGallery from './imageGallery/ImageGallery';
import ControlPanel from './controlPanel/ControlPanel';
import ProductDescriptionPanel from './ProductDescriptionPanel';
import axios from 'axios';
import Fixtures from './fixtures.js';


interface OverviewProps {
  currentProductID: string
}

const Overview: React.FC<OverviewProps> = (props: OverviewProps) => {

  const [currentStyle, setCurrentStyle] = React.useState({});
  const [styleList, setStyleList] = React.useState({results: []});

  React.useEffect(() => {
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
        <ImageGallery style={currentStyle}/>
        <ControlPanel product={props.currentProductData}
                      currentStyle={currentStyle}
                      styleList={styleList}
                      setCurrentStyle={setCurrentStyle} />
      </div>
      <ProductDescriptionPanel currentStyle={currentStyle}
                               product={props.currentProductData}/>
    </section>
  )
}

export default Overview;