import React, { FC } from 'react';
// import Question.tsx;
import AnswersList from './AnswersList';

interface QuestionsListProps {
  answer?: {
    answer_id: number,
    body: string,
    date: string,
    answerer_name: string,
    helpfulness?: number,
    photos?: any}
}

const QuestionsList: FC<QuestionsListProps> = (props) => {
  return (
    <div className='q-and-a-list-container'>
      <div className="question-container">
        <span className="question-text">Q: Who what which when wehre why whether how?</span>
        <div className="helpful-answer-btn">
          <span>Helpful? </span>
          <button className="helpful-btn"><span>Yes</span>&nbsp; (10) &nbsp;|</button>
          <button className="add-answer-btn">Add Answer</button>
          {/* <AList /> */}
        </div>
      </div>
      <AnswersList answer={props.answer}/>
    </div>
  )
}

export default QuestionsList;