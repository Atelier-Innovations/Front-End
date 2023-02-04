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
  const [imageExpanded, setImageExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setImageExpanded(
      imageExpanded ? false : true
    );
  };

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
          <ImageGallery style={currentStyle}
                        imageExpanded={imageExpanded}
                        toggleExpanded={toggleExpanded}/>

        {imageExpanded ? null :
        <ControlPanel product={props.currentProductData}
                      currentStyle={currentStyle}
                      styleList={styleList}
                      setCurrentStyle={setCurrentStyle} />}
      </div>
      <ProductDescriptionPanel currentStyle={currentStyle}
                               product={props.currentProductData}/>
    </section>
  )
}

export default Overview;