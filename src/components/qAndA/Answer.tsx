import React, { FC } from 'react';

interface AnswerProps {
  answer: {
    answer_id: number,
    body: string,
    date: string,
    answerer_name: string,
    helpfulness: number,
    photos: any
  }
}

const Answer: FC <AnswerProps> = (props: AnswerProps) => {
  // using currentProductID to create list ofinitial Questions
  // const [currentProductID, setCurrentProductID] = React.useState<number>(37311);
  // iterate over input array of questions, angrab their data
  // const answer = AnswerProps.answer;
  console.log('what is props: ', props);
  return (
    <div className="answer-info-container">
      <p>{props.answer.body}</p>
      <div className="answer-info">
        <span className="user">by {props.answer.answerer_name}, <span className="date">{props.answer.date}</span></span>
        <button className="helpful-btn">| &nbsp; Helpful? <span>Yes</span>(0) &nbsp; | &nbsp;</button>
        <button className="report-btn">Report</button>
      </div>
    </div>
  )
};

export default Answer;
