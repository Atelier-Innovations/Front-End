import React from 'react';
import { Overview } from './Overview';
import RatingsReviews from './RatingsReviews';
import RelatedProducts from './RelatedProducts';
import QandA from './QandA';

export const App: React.FC = () => (
  <div className="app">
    <nav>
    </nav>
    <Overview />
    <RelatedProducts />
    <RatingsReviews />
    <QandA />
  </div>

);