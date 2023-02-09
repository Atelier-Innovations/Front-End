import React, { FC } from 'react';
import {useState} from 'react';
interface QuestionProps {
}

const Question: FC<QuestionProps> = (props) => {
  const [helpful, setHelpful] = useState(0);
  const [helpfulClicked, setHelpfulClicked] = useState(false);

  const handleHelpfulClick = ((e) => {
    // console.log(helpful);
    e.preventDefault();
    if (!helpfulClicked) {
      setHelpfulClicked(true);
      return setHelpful(helpful+1)
    }

  });

  return (
    <div className="question-container">
    <span className="question-text">Q: Who what which when wehre why whether how?</span>
    <div className="helpful-answer-btn">
      <span>Helpful? </span>
      <button className="helpful-btn" ><span onClick={(e) => {handleHelpfulClick(e)}}>Yes</span>&nbsp; {helpful} &nbsp;|</button>
      <button className="add-answer-btn">Add Answer</button>
    </div>
  </div>
  )
}

export default Question;