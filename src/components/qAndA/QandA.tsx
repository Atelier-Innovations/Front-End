import React, { FC } from 'react';
// type checing to be functional .
// const QandA: React.FC = (props) => {
// };
interface QandAProps {

}

const QandA: FC<QandAProps> = (props) => {
  return (
    <section className="widget q-and-a">
      <div className="q-and-a-container">
        <h1>Question and Answers</h1>
        <div className="search-bar">
        <input name="search-bar-text" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <button className="search-button">Search Button</button>
        </div>

        <div className="question-container">
          <div>Q: Who what which when wehre why whether how?</div>
          <div className="helpful-answer-btn">
            <div className="q-btns"></div>
            <button>Helpful? </button>
            <button>Add-Answer-button</button>
          </div>
        </div>

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

        {/* Action buttons */}
        <div className="action-btn">
          <button className="action-btn-more-answers">More Answered Questions</button>
          <button className="action-btn-add-question">Add a Question +</button>
        </div>
      </div>
    </section>
  )
}

export default QandA;