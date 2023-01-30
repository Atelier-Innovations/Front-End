import React, { FC } from 'react';

interface ActionButtonsProps {
}

const ActionButtons: FC<ActionButtonsProps> = (props) => {
  return (
    <div className="action-btn">
    <button className="action-btn more-answers">More Answered Questions</button>
    <button className="action-btn add-question">Add a Question +</button>
    </div>
    )
  };

export default ActionButtons;
