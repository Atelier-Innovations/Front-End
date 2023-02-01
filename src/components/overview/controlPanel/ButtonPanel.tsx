import React from 'react';

const ButtonPanel: React.FC = (props) => {
  const [outOfStock, setOutOfStock] = React.useState(false);
  const [sizeSelected, setSizeSelected] = React.useState(null);
  const [quantityRange, setQuantityRange] = React.useState(0);

  const handleSizeChange = event => {
    if (event.target.selectedIndex === 0) {
      setSizeSelected(null);
    } else {
      setSizeSelected(event.target.selectedIndex);
    }
  }

  React.useEffect( () => {
    if (props.skus.length > 0) {
      let total = props.skus.reduce( (mem, sku) => {
        return mem + props.currentStyle.skus[sku].quantity
      }, 0)
      if (!(total > 0)) {
        setOutOfStock(true);
      } else {
        setOutOfStock(false);
      }
      if (sizeSelected !== null) {
        setQuantityRange(props.currentStyle.skus[props.skus[sizeSelected - 1]].quantity + 1);
      }
    }
  }, [props.currentStyle, sizeSelected])

  return (
    <div className="controls">
      <div className="row-1">
        <select className="size-button" disabled={outOfStock} onChange={handleSizeChange}>
          {outOfStock ?
          <option>OUT OF STOCK</option> : <option>Select Size</option>}
          {props.skus.map(sku => {
            if (props.currentStyle.skus[sku].quantity > 0) {
              return (
                <option key={sku}>{props.currentStyle.skus[sku].size}</option>
              )
            }
          })}
        </select>
        <select className="quantity" disabled={sizeSelected === 0 ?
                                     true : false}>
          <option>-</option>
          {Array.from(Array(quantityRange).keys()).map( num => (
            <option key={num}>{num}</option>
          ))}

        </select>
      </div>
      <div className="row-2">
        <button className="add-to-bag">Add To Bag</button>
        <button className="favorite">*</button>
      </div>
    </div>
  )
}

export default ButtonPanel;