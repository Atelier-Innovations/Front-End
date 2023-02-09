import React from 'react';
import { useState, useEffect } from 'react';
const star = require('../../../icons/star-regular.svg');

const ButtonPanel: React.FC = ({currentStyle, skus}) => {
  const [outOfStock, setOutOfStock] = useState(false);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [quantityRange, setQuantityRange] = useState(0);
  const [displayNotification, setDisplayNotification] = useState(false);

  const handleSizeChange = event => {
    if (event.target.selectedIndex === 0) {
      setSizeSelected(null);
    } else {
      setSizeSelected(event.target.selectedIndex);
    }
  }

  const handleAdd = event => {
    if (sizeSelected === null) {
      setDisplayNotification(true);
    } else {
      console.log('Ka-ching!');
    }
  }

  useEffect( () => {
    if (skus.length > 0) {
      let total = skus.reduce( (mem, sku) => {
        return mem + currentStyle.skus[sku].quantity
      }, 0)
      if (!(total > 0)) {
        setOutOfStock(true);
      } else {
        setOutOfStock(false);
      }
      if (sizeSelected !== null) {
        let quantityOfSize = currentStyle.skus[skus[sizeSelected - 1]].quantity;
        quantityOfSize >= 15 ?
        setQuantityRange(16) :
        setQuantityRange(currentStyle.skus[skus[sizeSelected - 1]].quantity + 1);
      } else {
        setQuantityRange(0);
      }
    }
  }, [currentStyle, sizeSelected])

  return (
    <div className="controls">
      {!sizeSelected && displayNotification ? <span>Please select size</span> : null}
      <div className="row-1">
        <select className="size-button" disabled={outOfStock} onChange={handleSizeChange}>
          {outOfStock ?
          <option>OUT OF STOCK</option> : <option>Select Size</option>}
          {skus.map(sku => {
            if (currentStyle.skus[sku].quantity > 0) {
              return (
                <option key={sku}>{currentStyle.skus[sku].size}</option>
              )
            }
          })}
        </select>
        <select className="quantity" disabled={sizeSelected === null ?
                                     true : false}>
          {sizeSelected === null ? <option>-</option> : null}
          {Array.from(Array(quantityRange).keys()).slice(1).map( num => (
            <option key={num}>{num}</option>
          ))}

        </select>
      </div>
      <div className="row-2">
        {outOfStock ? null : <button className="add-to-bag"
                                     onClick={handleAdd}>Add To Bag <span>+</span></button>}
        <button className="favorite">
          <img src={star} className="star" />
        </button>
      </div>
    </div>
  )
}

export default ButtonPanel;