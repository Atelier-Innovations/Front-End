import React from 'react';
import { Overview } from './Overview';
import RatingsReviews from './RatingsReviews';

export const App: React.FC = () => (
  <div className="app">
    <nav>
    </nav>
    <section className="widget overview">
      <Overview />
    </section>
    <section className="widget related-products">
      <h1>RELATED PRODUCTS</h1>
    </section>
      < RatingsReviews/>
    <section className="widget q-and-a">
      <h1>Q&A</h1>
    </section>
  </div>

);