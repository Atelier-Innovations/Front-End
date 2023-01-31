import React, { FC } from 'react';

interface AnswersListProps {
}

const AnswersList: FC<AnswersListProps> = (props) => {
  // using currentProductID to create list ofinitial Questions
  // const [currentProductID, setCurrentProductID] = React.useState<number>(37311);
  return (
    <div className="answers-container">
      <p className="answers-title">A: </p>
      <div className="answers-list">
      <div className="answer-info-container">
        <p>Answer 1 Text is in Here Icing macaroon bear clar jelly beans chocolatecake. Cookie oat cake chocolate halvah jelly cake cotton candy souffle topping. Jujubes topping cake gummies lemon drops.</p>
        <div className="answer-info">
          <span className="user">by User1337, <span className="date">May 1, 2019</span></span>
          <button className="helpful-btn">| &nbsp; Helpful? <span>Yes</span>(0) &nbsp; | &nbsp;</button>
          <button className="report-btn">Report</button>
        </div>
      </div>
      <div className="answer-info-container">
        <p> Answer 2 Yes, as you can see in these photos.</p>
        <div className="img-container">
          <img className="q-and-a-answer-img" src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="dog"/>
          <img className="q-and-a-answer-img" alt="img2"/>
          <img className="q-and-a-answer-img" alt="img3"/>
        </div>
        <div className="answer-img-info">
        <div className="answer-info">
          <span className="user">by User1337 - Seller, <span className="date">May 1, 2019</span></span>
          <button className="helpful-btn">| &nbsp; Helpful? <span>Yes</span>(0) &nbsp; | &nbsp;</button>
          <button className="report-btn">Report</button>
        </div>
      </div>
      <button className="action-btn-load-more-answers">LOAD MORE ANSWERS</button>
      </div>
      </div>
    </div>
    )
  };

export default AnswersList;
