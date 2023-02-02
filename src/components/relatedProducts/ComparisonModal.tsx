import React, { FC } from 'react';

interface ComparisonModalProps {
  currentProductData: ProductObject;
  cardProductData: ProductObject;
}

type ProductObject = {
  name?: string;
  category?: string;
  default_price?: string;
};


const ComparisonModal: FC<ComparisonModalProps> = ({ currentProductData, cardProductData }) => {

  const makeFeatureObject = (data) => {
    let features = data.features
    let result = {}
    features.forEach(item => {
      result[item.feature] = item.value;
    })
    return result
  }

  // build object with features for each product
  let currentProductFeatures: object
  let cardProductFeatures: object

  if (Object.values(currentProductData).length > 1) {
    currentProductFeatures = makeFeatureObject(currentProductData)
  }
  if (Object.values(cardProductData).length > 1) {
    cardProductFeatures = makeFeatureObject(cardProductData)
  }

  // build list with features from both products
  let featureList = new Set();
  const buildCombinedFeatureList = function (product1, product2) {
    if (Object.keys(product1).length > 0 && Object.keys(product2).length > 0) {
      for (let i = 0; i < arguments.length; i++) {
        arguments[i].features.forEach((featureItem) => {
          featureList.add(featureItem.feature);
        });
      }
    }
  };
  buildCombinedFeatureList(currentProductData, cardProductData);

  // convert feature list to an array to map it
  let featureListArray = Array.from(featureList);

  return (
    <div>
      <div className='modal-title'>
        <h4>COMPARISON</h4>
      </div>

      {/* product names */}
      <div className='comparison-modal-titlebox'>
        <h3>{currentProductData.name}</h3>
        <h3>{cardProductData.name}</h3>
      </div>

      <div className='comparison-modal-table'>
        {/* price */}
        <div className='comparison-modal-row'>
          <div>{currentProductData.default_price}</div>
          <div>Price</div>
          <div>{cardProductData.default_price}</div>
        </div>

        {/* other features */}
        {featureListArray.map((feature: string, index) => {
          return (
            <div key={index} className='comparison-modal-row'>
              <div>{currentProductFeatures[feature] || 'N/A'}</div>
              <div>{feature}</div>
              <div>{cardProductFeatures[feature] || 'N/A'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonModal;
