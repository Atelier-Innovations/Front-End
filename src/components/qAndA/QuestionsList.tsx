import React, { FC } from 'react';
import Question from './Question';
import AnswersList from './AnswersList';
import {useState, useEffect} from 'react';
import axios from 'axios';

interface QuestionsListProps {
  currentProductID?: string,
  answer?: {
    answer_id: number,
    body: string,
    date: string,
    answerer_name: string,
    helpfulness?: number,
    photos?: any}
}

const QuestionsList: FC<QuestionsListProps> = (props) => {
  const currentProductID = props.currentProductID;
  const [questionsList, setQuestionsList] = useState([]);

  const getAllQuestions = () => {
    axios
      .get(`http://localhost:6969/questions/${currentProductID}`, {})
      .then((result) => {
        // console.log('current result at QuestionsList axios: ', result);
      })
      .catch((err) => {
        // console.log('error in axios request questionsList: ', err);
      })
  }

  useEffect(() => {
    getAllQuestions()
  }, []);

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