import React from 'react';
import StaticInfoDisplay from './StaticInfoDisplay';
import StyleSelector from './StyleSelector';
import ButtonPanel from './ButtonPanel';

const ControlPanel: React.FC = (props) => {

  return (
    <div className="control-panel">
      <StaticInfoDisplay />
      <StyleSelector />
      <ButtonPanel />
    </div>
  )
}

export default ControlPanel;