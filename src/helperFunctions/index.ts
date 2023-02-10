import axios from 'axios';
import notFound from '../images/not-found.png';

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

export const getRatingsDataFromDB = (productID, setterFunction) => {
  axios.get(`http://localhost:6969/reviews/meta?id=${productID}`)
  .then((result) => {
    setterFunction(result.data);
  })
  .catch((err) => {
    console.log(err);
  })
};

export const getCardProductImgFromDB = async (cardID, setterFunction) => {
  let response = await axios.get(
    `http://localhost:6969/products/${cardID}/styles`
  );
  let img = response.data.results[0].photos[0].thumbnail_url;
  // check image for null value and display "not available" if true
  if (img === null) {
    setterFunction(notFound);
  } else {
    setterFunction(img);
  }
};

export const getSalePrice = async (cardID, setterFunction) => {
  try {
    let response = await axios.get(
    `http://localhost:6969/products/${cardID}/styles`
    );
    let data = response.data.results
    let defaultStyle = response.data.results[0]
    data.forEach(item => {
      if (item['default?'] === true)
      defaultStyle = item
    })
    // let salePrice = response.data.results.sale_price
    setterFunction(defaultStyle.sale_price);
  }
  catch (error) {
    console.log(error)
  }
};

export const averageRating = (ratings: object) => {
  if (!ratings) {
    return;
  }

  let overallRating = Math.round(((Number(ratings['1']) * 1) + (Number(ratings['2']) * 2) + (Number(ratings['3']) * 3) + (Number(ratings['4']) * 4) + (Number(ratings['5']) * 5)) / ( Number(ratings['1']) + Number(ratings['2']) + Number(ratings['3']) + Number(ratings['4']) + Number(ratings['5'])) * 10) / 10

  if (overallRating.toString().length === 1) {
    let stringRating: string = overallRating.toString()
    stringRating += '.0'
    return stringRating
  } else {
    let stringRating: string = overallRating.toString()
    return stringRating;
  }
}