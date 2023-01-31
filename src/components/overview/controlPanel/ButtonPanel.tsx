import React from 'react';

const ButtonPanel: React.FC = (props) => {
  const [outOfStock, setOutOfStock] = React.useState(false);

  React.useEffect( () => {
    if (props.skus.length > 0) {
      let total = props.skus.reduce( (mem, sku) => {
        console.log('quantity:', props.currentStyle.skus[sku].quantity)
        return mem + props.currentStyle.skus[sku].quantity
      }, 0)
      console.log('total:', total)
      if (!(total > 0)) {
        setOutOfStock(true);
      } else {
        setOutOfStock(false);
      }
    }
  }, [props.currentStyle])

  return (
    <div className="controls">
      <div className="row-1">
        <select className="size-button" disabled={outOfStock}>
          {outOfStock ?
          <option>OUT OF STOCK</option> : <option>Select Size</option>}
          {props.skus.map((sku, index) => {
            if (props.currentStyle.skus[sku].quantity > 0) {
              return (
                <option key={index}>{props.currentStyle.skus[sku].size}</option>
              )
            }
          })}
        </select>
        <select className="quantity"></select>
      </div>
      <div className="row-2">
        <button className="add-to-bag">Add To Bag</button>
        <button className="favorite">*</button>
      </div>
    </div>
  )
}

export default ButtonPanel;