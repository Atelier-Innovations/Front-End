import React from 'react';
import { useState } from 'react';
import { Overview } from './overview/Overview';
import RatingsReviews from './ratingsReviews/RatingsReviews';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QandA from './qAndA/QandA';
import ReactModal from 'react-modal';

export const App: React.FC = () => {

  return (
    <div className="app">
      <nav>
      </nav>
      <Overview />
      <RelatedProducts />
      <RatingsReviews />
      <QandA />
    </div>
  )

};