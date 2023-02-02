import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../shared/Modal';

// category, name, price (price for default style), and rating
interface ComparisonModalProps {
  cardID: string;
  currentProductID: string;
  currentProductData: object;
}

// sample api data
// {
//   "id": 11,
//   "name": "Air Minis 250",
//   "slogan": "Full court support",
//   "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
//   "category": "Basketball Shoes",
//   "default_price": "0",
//   "features": [
//   {
//           "feature": "Sole",
//           "value": "Rubber"
//       },
//   {
//           "feature": "Material",
//           "value": "FullControlSkin"
//       },
//   // ...
//   ],
// }

const ComparisonModal: FC<ComparisonModalProps> = ({ currentProductData, currentProductID, cardID }) => {
  // X pass in ids of currentProductId and modalProductId
  // X get product info for each product
  // X create set of all features to map through
  // create object for each product, key is feature and value is value
  // if feature does not exist, output 'N/A'

  // let [currentProductDetails, setCurrentProductDetails] = useState({});
  let [cardProductData, setCardProductData] = useState({});

  const makeFeatureObject = (data) => {
    let features = data.features
    let result = {}
    features.forEach(item => {
      result[item] += item.value;
    })
  }

  if (Object.values(currentProductData).length > 1) {
    const currentProductFeatures = makeFeatureObject(currentProductData)
  }

  if (Object.values(cardProductData).length > 1) {
    const cardProductFeatures = makeFeatureObject(cardProductData)
  }

  console.log('current: ', currentProductData)


  // get card product data
  const getProductDataFromDB = (productId, setFunction) => {
    axios
      .get(`http://localhost:6969/products/${productId}`, {})
      .then((result) => {
        setFunction(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductDataFromDB(cardID, setCardProductData);
  }, []);

  // build feature list
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
        {featureListArray.map((feature: string) => {
          return (
            <div className='comparison-modal-row'>
              <div>{currentProductData.slogan}</div>
              <div>{feature}</div>
              <div>{cardProductData.slogan}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonModal;
