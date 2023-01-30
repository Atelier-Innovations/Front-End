import React, { FC } from 'react';

interface QuestionProps {
}

const Question: FC<QuestionProps> = (props) => {
  return (
  <div className='q-and-a-list-container'>
    <div className="question-container"> QandAList
      <div>Q: Who what which when wehre why whether how?</div>
      <div className="helpful-answer-btn">
        <div className="q-btns"></div>
        <button>Helpful? Yes(numCount)</button>
        <button>Add-Answer-button</button>
      </div>
    </div>
  </div>
  )
}

export default Question;