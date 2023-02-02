import axios from 'axios';

export const getProductDataFromDB = (productID, setterFunction) => {
  axios
    .get(`http://localhost:6969/products/${productID}`, {})
    .then((result) => {
      setterFunction(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRelatedProductsFromDB = (productID, setterFunction) => {
  axios
    .get(`http://localhost:6969/products/${productID}/related`, {})
    .then((result) => {
      setterFunction(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

