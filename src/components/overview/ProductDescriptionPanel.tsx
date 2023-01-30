import React from 'react';

const ProductDescriptionPanel: React.FC = (props) => {

  return (
    <div className="bottom-panel">
      <div className="description">
        <h3>Product Slogan. Pithy Description Or Catchphrase</h3>
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
      </div>
      <div className="checklist">
        <ul>
          <li>It's cheese!</li>
          <li>I love cheese!</li>
          <li>Yummy yummy cheese!</li>
          <li>cheese is the best. . .</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductDescriptionPanel;