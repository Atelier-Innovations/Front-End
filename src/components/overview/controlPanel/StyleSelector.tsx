import React from 'react';
import StyleIcon from './StyleIcon';

interface StyleSelectorProps {
  currentStyle: {
    name: string
  },
  styles: {
    results: Array<object>
  }
}



const StyleSelector: React.FC<StyleSelectorProps> = (props: StyleSelectorProps) => {

  const handleClick = event => {
    const newStyle = props.styles.results[event.target.id];
    props.setCurrentStyle(newStyle);
  }

  return (
    <>
      <div className='style-selector-div'>
        {props.currentStyle.name &&
        <h3 className="style-name"><span>STYLE</span> {'>'} {props.currentStyle.name.toUpperCase()} </h3>}
        <div className="style-selector">
          {props.styles.results.map( (style, index) => (
            <StyleIcon style={style}
                      key={style.style_id}
                      index={index}
                      handleClick={handleClick}
                      selected={
                        style.style_id === props.currentStyle.style_id ?
                        true : false
                      } />
          ))}
        </div>
      </div>
    </>

  )
}

export default StyleSelector;