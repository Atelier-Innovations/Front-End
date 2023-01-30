import React, { FC } from 'react';

interface QuestionsListProps {

}

const QuestionsList: FC<QuestionsListProps> = (props) => {
  // using currentProductID to create list ofinitial Questions
  // const [currentProductID, setCurrentProductID] = React.useState<number>(37311);
  // const [currentQuestions, setCurrentQuestions] = React.useState<QuestionsListProps[]>([]);
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
      {/* AnswersList component here */}
    </div>

  )
}

export default QuestionsList;