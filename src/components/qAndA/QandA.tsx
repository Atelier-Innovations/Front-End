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
        <div className="q-and-a-question">Question 1 text
          <p>Q: Who what which when wehre why whether how?</p>
          <button>Helpful? </button>
          <div>|</div>
          <button>add-answer-button</button>
        </div>
        <div className="q-and-a-answer">Answer 1
          <p>A: Answer Text in Here</p>
          <div className="q-and-a-user"> Username Here</div>
          <div className="q-and-a-date">Date Here May 1, 2023 </div>
          <button>Helpful Button</button>
          <button>Report</button>
          <div className="q-and-a-answer-photos">
            <p>Yes, as you can see in these photos.</p>
            <div className="q-and-a-answer-img-container">
              <img className="q-and-a-answer-img" />
              <img className="q-and-a-answer-img" />
              <img className="q-and-a-answer-img" />
              <p> by User1337 - Seller, May1, 2019</p>
            </div>
          </div>
          <button>LOAD MORE ANSWERS</button>
        </div>
        <button>More Answered Questions</button>
        <button>Add a Question +</button>
      </div>
    </section>
  )
}

export default QandA;