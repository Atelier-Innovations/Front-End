import React, { FC } from 'react';
import { Rating } from 'react-simple-star-rating';

interface ComparisonModalProps {
  currentProductData: {
    name?: string;
    category?: string;
    default_price?: number;
  }
  cardProductData: {
    name?: string;
    category?: string;
    default_price?: number;
  }
  cardRating: string;
  currentProductRating: string
}


const ComparisonModal: FC<ComparisonModalProps> = ({ currentProductData, cardProductData, cardRating, currentProductRating }) => {


  // refactor with type checking
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

  if (Object.values(currentProductData).length > 0) {
    currentProductFeatures = makeFeatureObject(currentProductData)
  }
  if (Object.values(cardProductData).length > 0) {
    cardProductFeatures = makeFeatureObject(cardProductData)
  }

  // build list with features from both products
  let featureList = new Set();
  const buildCombinedFeatureList = function (product1: object , product2: object) {
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
      <div className='comparison-modal-table'>
        {/* product names */}
        <div className='comparison-modal-row'>
          <h3>{currentProductData.name}</h3>
          <div></div>
          <h3>{cardProductData.name}</h3>
        </div>

        {/* price */}
        <div className='comparison-modal-row'>
          <div>${Math.round(currentProductData.default_price)}</div>
          <div>Price</div>
          <div>${Math.round(cardProductData.default_price)}</div>
        </div>

        {/* Rating */}
        <div className='comparison-modal-row'>
          <div>< Rating readonly={true} initialValue={cardRating} size={ 18 } fillColor="#525252" emptyColor="#00000040" allowFraction={ true }/> </div>
          <div>Rating</div>
          <div>< Rating readonly={true} initialValue={currentProductRating} size={ 18 } fillColor="#525252" emptyColor="#00000040" allowFraction={ true }/> </div>
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
