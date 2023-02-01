import React from 'react';

const ButtonPanel: React.FC = (props) => {
  const [outOfStock, setOutOfStock] = React.useState(false);
  const [sizeSelected, setSizeSelected] = React.useState(0);
  const [quantityRange, setQuantityRange] = React.useState(0);

  const handleSizeChange = event => {
    //gotta be minus 1 to account for Select Size option; sizes start at 1.
    setSizeSelected(event.target.selectedIndex - 1);
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
      setQuantityRange(props.currentStyle.skus[props.skus[sizeSelected]].quantity);
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