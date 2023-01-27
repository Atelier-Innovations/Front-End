import React, { FC } from 'react';

interface RelatedProductsProps {
}

const RelatedProducts: FC<RelatedProductsProps> = (props) => {

  return (
    <section className="related-products widget">
      <h2 className="title">Related </h2>
      <div className="carousel">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <h2 className="title">Your Outfit</h2>
      <div className="carousel">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </section>
  )
}

export default RelatedProducts;