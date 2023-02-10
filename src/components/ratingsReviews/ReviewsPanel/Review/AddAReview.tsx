import React, { FC } from "react";
import { Rating } from 'react-simple-star-rating'
import axios from "axios";

interface AddAReviewProps {
  productMetaData: {
    characteristics?: object;
    product_id?: number;
    ratings?: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    recommended?: object;
  };
  newReview: {
    product_id: number;
    rating: number;
    summary: string;
    body: string;
    recommend: boolean;
    name: string;
    email: string;
    photos: Array<object>;
    characteristics: {};
  };
  makeNewReview: Function;
  setModalIsOpen: Function;
  productName: string;
}

const AddAReview: FC<AddAReviewProps> = ({ productMetaData, newReview, makeNewReview, setModalIsOpen, productName }) => {


  let productChars:any = productMetaData.characteristics;

  if (productChars.Comfort) {
    var comfortID = productChars.Comfort.id;
  }

  if (productChars.Fit) {
    var fitID = productChars.Fit.id;
  }

  if(productChars.Length) {
    var lengthID = productChars.Length.id;
  }

  if (productChars.Quality) {
    var qualityID = productChars.Quality.id;
  }

  if (productChars.Width) {
    var widthID = productChars.Width.id;
  }

  if (productChars.Size) {
    var sizeID = productChars.Size.id;
  }


  // let comfortID = productChars.Comfort.id;
  // let fitID = productChars.Fit.id;
  // let lengthID = productChars.Length.id;
  // let qualityID = productChars.Quality.id;
  // let widthID = productChars.Width.id;
  // let sizeID = productChars.Size.id

  // console.log(comfortID)

  const onComfortChange = (event) => {
    // console.log(event.target.value);
    makeNewReview({
      ...newReview,
      characteristics: {
        ...newReview.characteristics,
        [comfortID]: Number(event.target.value)
      }
    })
  }

  const ifComfort = (productChars) => {
    if (productChars.Comfort) {
      return (
        <div className="charachteristics">
            <div className="select-title">Comfort: </div>
          <div className="custom-select">

            <select onChange={ onComfortChange } defaultValue={0}>
              <option value={0} id="null"> Choose An Option </option>
              <option value={1} id="one">Unwearable</option>
              <option value={2} id="two">Uncomfortable</option>
              <option value={3} id="three">Wearable</option>
              <option value={4} id="four">Comfortable</option>
              <option value={5} id="five">Perfect</option>
            </select>
          </div>
        </div>
      )
    }
  }

  const onFitChange = (event) => {
    makeNewReview({
      ...newReview,
      characteristics: {
        ...newReview.characteristics,
        [fitID]: Number(event.target.value)
      }
    })
  }

  const ifFit = (productChars) => {
    if (productChars.Fit) {
      return (
        <div className="charachteristics">
          <div className="select-title">Fit: </div>
          <div className="custom-select">
            <select onChange={ onFitChange } defaultValue={0}>
              <option value={0} id="null"> Choose An Option </option>
              <option value={1} id="one">Too Tight</option>
              <option value={2} id="two">A Little Tight</option>
              <option value={3} id="three">Perfect</option>
              <option value={4} id="four">A Little Big</option>
              <option value={5} id="five">Too Big</option>
            </select>
          </div>
        </div>
      )
    }
  }

  const onQualityChange = (event) => {
    makeNewReview({
      ...newReview,
      characteristics: {
        ...newReview.characteristics,
        [qualityID]: Number(event.target.value)
      }
    })
  }

  const ifQuality = (productChars) => {
    if (productChars.Quality) {
      return (
        <div className="charachteristics">
          <div className="select-title">Quality: </div>
          <div className="custom-select">

            <select onChange={ onQualityChange }defaultValue={0}>
              <option value={0} id="null"> Choose An Option </option>
              <option value={1} id="one">Poor</option>
              <option value={2} id="two">Okay</option>
              <option value={3} id="three">Mediocre</option>
              <option value={4} id="four">Good</option>
              <option value={5} id="five">Perfect</option>
            </select>
          </div>
        </div>
      )
    }
  }

  const onSizeChange = (event) => {
    makeNewReview({
      ...newReview,
      characteristics: {
        ...newReview.characteristics,
        [sizeID]: Number(event.target.value)
      }
    })
  }

  const ifSize = (productChars) => {
    if (productChars.Size) {
      return (
        <div className="charachteristics">
          <div className="select-title">Size:</div>
          <div className="custom-select">
            <select onChange={ onSizeChange } defaultValue={0}>
              <option value={0} id="null"> Choose An Option </option>
              <option value={1} id="one">Too Tight</option>
              <option value={2} id="two">A Little Tight</option>
              <option value={3} id="three" >Perfect</option>
              <option value={4} id="four">A Little Big</option>
              <option value={5} id="five">Too Big</option>
            </select>
          </div>
        </div>
      )
    }
  }

  const onLengthChange = (event) => {
    makeNewReview({
      ...newReview,
      characteristics: {
        ...newReview.characteristics,
        [lengthID]: Number(event.target.value)
      }
    })
  }

  const ifLength = (productChars) => {
    if (productChars.Length) {
      return (
        <div className="charachteristics">
          <div className="select-title">Length: </div>
          <div className="custom-select">

            <select onChange={ onLengthChange } defaultValue={0}>
              <option value={0} id="null"> Choose An Option </option>
              <option value={1} id="one">Too Short</option>
              <option value={2} id="two">A Little Short</option>
              <option value={3} id="three">Perfect</option>
              <option value={4} id="four">A Little Long</option>
              <option value={5} id="five">Too Long</option>
            </select>
          </div>
        </div>
      )
    }
  }

  const onWidthChange = (event) => {
    makeNewReview({
      ...newReview,
      characteristics: {
        ...newReview.characteristics,
        [widthID]: Number(event.target.value)
      }
    })
  }

  const ifWidth = (productChars) => {
    if (productChars.Width) {
      return (
        <div className="charachteristics">
          <div className="select-title">Width: </div>
          <div className="custome-select">

            <select onChange={ onWidthChange } defaultValue={0}>
              <option value={0} id="null"> Choose An Option </option>
              <option value={1} id="one">Too Skinny</option>
              <option value={2} id="two">A Little Skinny</option>
              <option value={3} id="three">Perfect</option>
              <option value={4} id="four">A Little Wide</option>
              <option value={5} id="five">Too Wide</option>
            </select>
          </div>
        </div>
      )
    }
  }

  const emailOnChange = (event) => {
    makeNewReview({
      ...newReview,
      email: event.target.value
    })
    // console.log('newReview:', newReview);
  }

  const userNameOnChange = (event) => {
    makeNewReview({
      ...newReview,
      name: event.target.value
    });
  }

  const summaryOnChange = (event) => {
    makeNewReview({
      ...newReview,
      summary: event.target.value
    })
  }

  const bodyOnChange = (event) => {
    makeNewReview({
      ...newReview,
      body: event.target.value
    })
  }

  const recommendOnChange = (event) => {
    makeNewReview({
      ...newReview,
      recommend: !newReview.recommend
    })
  }

  const ratingsOnClick = (rating) => {
    makeNewReview({
      ...newReview,
      rating: rating
    })
  }



  const onFormSubmit = (event) => {
    event.preventDefault()

    axios.post('http://localhost:6969/reviews', newReview)
      .then((result) => {
        // console.log(result);
      })
      .catch((err) => {
        console.log(err)
      })


    alert('Form Submitted Successfully')


    makeNewReview({
      "product_id": productMetaData.product_id,
      "rating": 3.5,
      "summary": '',
      "body": '',
      "recommend": false,
      "name": '',
      "email": '',
      "photos": [],
      "characteristics": {}
        // "125033": 3,
        // "125031": 3,
        // "125032": 3,
        // "125034": 3

  });
  setModalIsOpen(false)


  }

  // console.log(newReview);

  return (
    <div className="add-a-review">
      <div className="formTitle">Write Your Review</div>

      <div className="formSubtitle">About the {productName}</div>
      <form className="review-form" onSubmit={onFormSubmit}>
        < Rating fillColor="#525252" emptyColor="#00000040" transition={true} onClick={ratingsOnClick} />
        <div className="text-fields">
          <div className="simpleInput"> <div className="field-title">Email:</div> <input type="email" onChange={ emailOnChange } value={newReview.email} maxLength={60} required></input></div>

          <div className="simpleInput"> <div className="field-title">Username:</div> <input type="text" onChange={ userNameOnChange } value={newReview.name} maxLength={60} required></input></div>

          <div className="simpleInput"> <div className="field-title">Summary:</div> <input type="text" onChange={ summaryOnChange }value={newReview.summary} maxLength={60} required></input></div>

          <div className="body"> <div className="field-title">Body:</div> <input type="textarea" onChange={ bodyOnChange } value={newReview.body} minLength={50} maxLength={1000} required></input></div>

          <div className="checkbox1"> <div className="field-title">Do you recommended this product?:</div> <input type="checkbox" onChange={ recommendOnChange }value={newReview.recommend.toString()} ></input></div>
        </div>

        {/* Photos: <input type="file" name="myImage" accept="image/*" /><br/> */}

        {ifComfort(productChars)}
        {ifFit(productChars)}
        {ifSize(productChars)}
        {ifQuality(productChars)}
        {ifLength(productChars)}
        {ifWidth(productChars)}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddAReview