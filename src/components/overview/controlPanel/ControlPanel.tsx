import React from 'react';
import StaticInfoDisplay from './StaticInfoDisplay';
import StyleSelector from './StyleSelector';
import ButtonPanel from './ButtonPanel';

interface ControlPanelProps {
  product: {
    // category: string,
    // name: string,
    // default_price: string
  },

  currentStyle: {},

  styleList: {}

}

const ControlPanel: React.FC<ControlPanelProps> = (props: ControlPanelProps) => {

  return (
    <div className="control-panel">
      <StaticInfoDisplay product={props.product} currentStyle={props.currentStyle} />
      <StyleSelector styles={props.styleList}
                     currentStyle={props.currentStyle}
                     setCurrentStyle={props.setCurrentStyle} />
      <ButtonPanel currentStyle={props.currentStyle}
                   skus={props.currentStyle.hasOwnProperty('skus') ?
                   Object.keys(props.currentStyle.skus) : []} />
    </div>
  )
}

export default ControlPanel;