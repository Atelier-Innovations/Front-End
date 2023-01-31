import React, { FC } from 'react';

interface QuestionProps {
}

const Question: FC<QuestionProps> = (props) => {
  return (
    <div className="question-container">
    <span className="question-text">Q: Who what which when wehre why whether how?</span>
    <div className="helpful-answer-btn">
      <span>Helpful? </span>
      <button className="helpful-btn"><span>Yes</span>&nbsp; (10) &nbsp;|</button>
      <button className="add-answer-btn">Add Answer</button>
    </div>
  </div>
  )
}

export default Question;