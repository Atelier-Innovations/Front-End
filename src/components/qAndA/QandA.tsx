import React, { FC } from 'react';
import SearchBar from './SearchBar';
import QuestionsList from './QuestionsList';
import AnswersList from './AnswersList';
import ActionButtons from './ActionButtons';

// interface QandAProps {
//   currentProductID: number
// }
// const QandA: React.FC = (props) => {
// };

const QandA: FC<QandAProps> = (props) => {
  return (
    <section className="widget q-and-a">
      <div className="q-and-a-container">
        <h1 className='q-and-a-header'>Question and Answers</h1>
        <SearchBar/>
        <QuestionsList/>
        <AnswersList/>
        <ActionButtons/>
      </div>
    </section>
  )
}

export default QandA;