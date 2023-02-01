import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './styles/main.scss';
import './styles/overview.scss';
import './styles/relatedProducts.scss';
import './styles/qAndA.scss';
import './styles/ratingsReviews.scss';

const rootNode = document.getElementById('app');

createRoot(rootNode).render(<App />);