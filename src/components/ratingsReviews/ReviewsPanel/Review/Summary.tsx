import React, { FC } from 'react';

interface SummaryProps {
  summary: string
};

const Summary: FC<SummaryProps> = ({ summary }) => {

  return (
    <div className="summary">
      {/* Note: remember "word-break truncation to prevent wrapping" */}
      { summary }
    </div>
  )
}


export default Summary;