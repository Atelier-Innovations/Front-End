import React, { FC } from 'react';

interface ActionButtonsProps {
}

const ActionButtons: FC<ActionButtonsProps> = (props) => {
  return (
    <div className="action-btn">
    <button className="action-btn more-answers">MORE ANSWERED QUESTIONS</button>
    <button className="action-btn add-question">ADD A QUESTION +</button>
    </div>
    )
  };

export default ActionButtons;
