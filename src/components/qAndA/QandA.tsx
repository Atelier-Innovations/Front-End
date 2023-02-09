import React, { FC } from 'react';
import SearchBar from './SearchBar';
import QuestionsList from './QuestionsList';
import AnswersList from './AnswersList';
import ActionButtons from './ActionButtons';

interface QandAProps {
  currentProductID: string
}


const QandA: FC<QandAProps> = (props: QandAProps) => {
  return (
    <section id="q-and-a" className="widget q-and-a">
      <div className="q-and-a-container">
        <div className='q-and-a-header'>QUESTIONS & ANSWERS</div>
        <SearchBar/>
        <QuestionsList currentProductID={props.currentProductID}/>
        {/* <AnswersList answer={props.answer}/> */}
        <ActionButtons/>
      </div>
    </section>
  )
}

export default QandA;