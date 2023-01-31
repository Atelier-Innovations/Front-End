import React, { FC } from 'react';
import SearchBar from './SearchBar';
import QuestionsList from './QuestionsList';
import AnswersList from './AnswersList';
import ActionButtons from './ActionButtons';

interface QandAProps {
}


const QandA: FC<QandAProps> = (props) => {

  return (
    <section className="widget q-and-a">
      <div className="q-and-a-container">
        <div className='q-and-a-header'>QUESTIONS & ANSWERS</div>
        <SearchBar/>
        <QuestionsList/>
        {/* <AnswersList answer={props.answer}/> */}
        <ActionButtons/>
      </div>
    </section>
  )
}

export default QandA;