import React from 'react';
import { Overview } from './Overview';

export const App: React.FC = () => (
  <div className="app">
    <nav>
    </nav>
    <Overview />
    <section className="widget related-products">
      <h1>RELATED PRODUCTS</h1>
    </section>
    <section className="widget reviews-ratings">
      <h1>REVIEWS & RATINGS</h1>
    </section>
    <section className="widget q-and-a">
      <h1>Q&A</h1>
    </section>
  </div>

);