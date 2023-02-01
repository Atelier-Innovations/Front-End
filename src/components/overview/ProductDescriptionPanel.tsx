import React from 'react';

const ProductDescriptionPanel: React.FC = (props) => {

  return (
    <div className="bottom-panel">
      <div className="description">
        <h3>{props.product.slogan}</h3>
        <p>{props.product.description}</p>
      </div>
      <div className="checklist">
        <ul>
          {props.product.features ?
           props.product.features.map( (feature, index) => (
            <li>{feature.feature}: {feature.value}</li>
           )) : null}
        </ul>
      </div>
    </div>
  )
}

export default ProductDescriptionPanel;