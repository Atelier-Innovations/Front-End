import React, { FC } from "react";
import { Rating } from 'react-simple-star-rating'
import axios from "axios";
import { useState } from 'react';

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

  const [ charCount, setCharCount ] = useState(0);


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
          <div className="custom-select">

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
    setCharCount(event.target.value.length)
  }

  const displayCounter = (chars) => {
    if (Number(chars) <= 50) {
      return <div className="charCount">Minimum required characters left: {50 - chars}</div>
    } else {
      return <div className="charCount-reached">Minimum reached</div>
    }
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
      "rating": 0,
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

  console.log(newReview);

  const toolTipRatingsArray = ["Terrible", "Okay", "Good", "Great", "Perfect"]

  return (
    <div className="add-a-review">
      <div className="formTitle">Write Your Review</div>


      <div className="formSubtitle">about the {productName}</div>
      <div className="star-rating">
          < Rating
            initialValue={0}
            tooltipDefaultText="Your Rating"
            tooltipArray={toolTipRatingsArray}
            fillColor="#525252"
            emptyColor="#00000040"
            transition={true}
            onClick={ratingsOnClick}
            showTooltip={true}/>
          </div>
      <form className="review-form" onSubmit={onFormSubmit}>


        <div className="checkbox1">
          <div className="field-title">Do you recommend this product?:</div> <input type="checkbox" onChange={ recommendOnChange }value={newReview.recommend.toString()} ></input>
        </div>


        <div className="text-fields">
          <div className="simpleInput">
            <div className="field-title">
              Email:
            </div>
              <input placeholder="What's your Email?" type="email" onChange={ emailOnChange } value={newReview.email} maxLength={60} required></input>
          </div>
          <div className="form-note1">For privacy reasons, do not use your full name or email address</div>

          <div className="simpleInput">
            <div className="field-title">
              Username:
            </div>
            <input placeholder="What's your Username?" type="text" onChange={ userNameOnChange } value={newReview.name} maxLength={60} required></input>
          </div>
          <div className="form-note2">For authentication reasons, you will not be emailed</div>


          <div className="simpleInput">
            <div className="field-title">
              Summary:
            </div>
            <input placeholder="Summarize it!" type="text" onChange={ summaryOnChange }value={newReview.summary} maxLength={60} required></input>
          </div>

          <div className="body">
            <div className="field-title">
              Body:
            </div>
            <textarea placeholder="Tell us about your experience!"  onChange={ bodyOnChange } value={newReview.body} minLength={50} maxLength={1000} required></textarea>
          </div>
          {displayCounter(charCount)}
        </div>

        {/* Photos: <input type="file" name="myImage" accept="image/*" /><br/> */}

        {ifComfort(productChars)}
        {ifFit(productChars)}
        {ifSize(productChars)}
        {ifQuality(productChars)}
        {ifLength(productChars)}
        {ifWidth(productChars)}
        <button type="submit">SUBMIT REVIEW +</button>
      </form>
    </div>
  )
}

export default AddAReview