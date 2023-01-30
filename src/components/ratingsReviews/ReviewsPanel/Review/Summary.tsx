import React, { FC } from 'react';

interface SummaryProps {

};

const Summary: FC<SummaryProps> = (props) => {

  return (
    <div className="summary">
      Note: remember "word-break truncation to prevent wrapping"
    </div>
  )
}


export default Summary;