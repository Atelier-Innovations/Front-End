import React from 'react';
import StaticInfoDisplay from './StaticInfoDisplay';
import StyleSelector from './StyleSelector';
import ButtonPanel from './ButtonPanel';

interface ControlPanelProps {
  product: {
    category: string,
    name: string,
    default_price: string
  }
}

const ControlPanel: React.FC<ControlPanelProps> = (props: ControlPanelProps) => {

  return (
    <div className="control-panel">
      <StaticInfoDisplay product={props.product} />
      <StyleSelector />
      <ButtonPanel />
    </div>
  )
}

export default ControlPanel;