import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './styles/main.scss';

const rootNode = document.getElementById('app');

createRoot(rootNode).render(<App />);