import React, { FC } from 'react';
// import ReactTimeAgo from 'react-time-ago';
import Answer from './Answer';
import { useState, useEffect } from 'react'
import axios from 'axios';


interface AnswersListProps {
  answerData?: { answer_id: number, body: string, date: string, answerer_name: string, helpfulness: number, photos: any}[];
}

const AnswersList: FC<AnswersListProps> = (props: AnswersListProps) => {
  // using currentProductID to create list ofinitial Questions
  // const [currentProductID, setCurrentProductID] = React.useState<number>(37311);
  // iterate over input array of questions, angrab their data
  const [currAnswers, setCurrentAnswers] = useState([]);
  // initial answers
  const getAnswers = () => {
    axios
      .get('http://localhost:6969/qa/questions/644533/answers')
      .then((result) => {
        console.log('successful api request: ', result);
        setCurrentAnswers(result.data.results);
      })
      .catch((err) => {
        console.log('error with api request: ', err.response.data);
      });
  }
  useEffect(() => {
    getAnswers();
  }, []);

  const dataList = [
    {
      answer_id: 5989893,
      body: 'This is an answer to your question!',
      date: '2022-12-16T00:00:00.000Z',
      answerer_name: 'orchid',
      helpfulness: 2,
      photos: []
    },
    {
      answer_id: 5989848,
      body: 'testing answe body',
      date: '2022-12-15T00:00:00.000Z',
      answerer_name: 'testuser',
      helpfulness: 0,
      photos: []
    },
    {
      answer_id: 5989855,
      body: 'It is time to have awesome day and look dope in your camo onesie',
      date: '2022-12-16T00:00:00.000Z',
      answerer_name: 'rando',
      helpfulness: 0,
      photos: []
    },
    {
      answer_id: 5989887,
      body: "it's 1:52",
      date: '2022-12-16T00:00:00.000Z',
      answerer_name: 'hello',
      helpfulness: 0,
      photos: []
    }
  ]
  return (
    <div className="answers-container">
      <p className="answers-title">A: </p>

      <div className="answers-list">
       {currAnswers.map((answer, i) =>
        <Answer answer={answer}/>
       )}
          <button className="action-btn-load-more-answers">LOAD MORE ANSWERS</button>
        </div>

    </div>
    )
  };

export default AnswersList;
