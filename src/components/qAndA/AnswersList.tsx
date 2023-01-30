import React, { FC } from 'react';

interface AnswersListProps {
}

const AnswersList: FC<AnswersListProps> = (props) => {
  // using currentProductID to create list ofinitial Questions
  // const [currentProductID, setCurrentProductID] = React.useState<number>(37311);
  return (
    <div className="answer-container">Answer 1
      <p>A: Answer Text Paragraph is in Here Icing macaroon bear clar jelly beans chocolatecake. Cookie oat cake chocolate halvah jelly cake cotton candy souffle topping. Jujubes topping cake gummies lemon drops.</p>
      <div className="answer-info">
        <div className="user"> by Username Here</div>
        <div className="date">Date Here May 1, 2023 </div>
        <button className="helpful-btn">Helpful Button</button>
        <button className="report-btn">Report</button>
      </div>
      <div className="answer-photos">
        <p> Answer 2 Yes, as you can see in these photos.</p>
        <div className="img-container">
          <img className="q-and-a-answer-img" alt="img1"/>
          <img className="q-and-a-answer-img" alt="img2"/>
          <img className="q-and-a-answer-img" alt="img3"/>
      </div>
      <div className="answer-img-info">
        <span> by User1337 - Seller, May1, 2019</span>
        <div className="helpful-report-btn-container">
          <button className="helpful-btn">Helpful? Yes '9'</button>
          <button className="report-btn">Report</button>
        </div>
      </div>
      <button className="action-btn-answers">LOAD MORE ANSWERS</button>
      </div>
    </div>
    )
  };

export default AnswersList;
