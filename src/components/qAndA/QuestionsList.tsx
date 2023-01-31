import React, { FC } from 'react';

interface QuestionsListProps {

}

const QuestionsList: FC<QuestionsListProps> = (props) => {
  // using currentProductID to create list ofinitial Questions
  // const [currentProductID, setCurrentProductID] = React.useState<number>(37311);
  // const [currentQuestions, setCurrentQuestions] = React.useState<QuestionsListProps[]>([]);
  return (
    <div className='q-and-a-list-container'>
      <div className="question-container">
        <span className="question-text">Q: Who what which when wehre why whether how?</span>
        <div className="helpful-answer-btn">
          <span>Helpful? </span>
          <button className="helpful-btn"><span>Yes</span>&nbsp; (10) &nbsp;|</button>
          <button className="add-answer-btn">Add Answer</button>
        </div>
      </div>
    </div>

  )
}

export default QuestionsList;