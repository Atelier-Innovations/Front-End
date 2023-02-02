import React, { FC } from 'react';

interface HelpfulProps {
  helpfulness: number;
};


const Helpful: FC<HelpfulProps> = ({ helpfulness }) => {


  return (
    <div className="helpful">
      Helpful? Yes ({helpfulness}) | Report
    </div>
  )
}



export default Helpful;