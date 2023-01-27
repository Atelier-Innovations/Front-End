import React from 'react';

export const Overview: React.FC = (props) => {

  return (
    <section className="widget overview">
      <div className="banner">
        <p>SITE WIDE ANNOUNCEMENT: IM DEIRDRE</p>
      </div>
      <div className="main-panel">
        <div className="image-gallery">
          <div className="image-carousel">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>

          </div>
        </div>
        <div className="control-panel">
          <div className="static-info">
            <div className="stars">STARS</div>
            <h3>Category</h3>
            <h2>Expanded Product Name</h2>
            <p>$369</p>
          </div>
          <div className="style-selector">
            <h3>Style Selector</h3>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="controls">
            <div className="row-1">
              <div className="size-button">Select Size</div>
              <div className="quantity">1</div>
            </div>
            <div className="row-2">
              <div className="add-to-bag">Add to Bag</div>
              <div className="favorite">*</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-panel">
        <div className="description">
          <h3>Product Slogan. Pithy Description Or Catchphrase</h3>
          <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
          <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        </div>
        <div className="checklist">
          <ul>
            <li>It's cheese!</li>
            <li>I love cheese!</li>
            <li>Yummy yummy cheese!</li>
            <li>cheese is the best. . .</li>
          </ul>
        </div>
      </div>
    </section>
  )
}