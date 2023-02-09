import React from 'react';

const ProductDescriptionPanel: React.FC = ({currentStyle, product}) => {

  return (
    <div className="bottom-panel">
      <div className="description">
        <h3 className='slogan'>{product.slogan}</h3>
        <p>{product.description}</p>
      </div>
      <div className="checklist">
        <ul>
          {product.features ?
           product.features.map( (feature, index) => (
            <li key={index}>{feature.feature}: {feature.value}</li>
           )) : null}
        </ul>
      </div>
    </div>
  )
}

export default ProductDescriptionPanel;