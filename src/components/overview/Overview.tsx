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

  const [currentStyle, setCurrentStyle] = React.useState(undefined);
  const [currentProduct, setCurrentProduct] = React.useState({
    category: 'cheese',
    name: 'cheeseproduct',
    default_price: '1000000'
  });

  React.useEffect(() => {
    axios(`http://localhost:6969/products/${props.currentProductID}`)
    .then( results => {
      setCurrentProduct(results.data);
      console.log(results.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <section className="widget overview">
      <Banner />
      <div className="main-panel">
        <ImageGallery />
        <ControlPanel product={currentProduct} />
      </div>
      <ProductDescriptionPanel />
    </section>
  )
}

export default Overview;