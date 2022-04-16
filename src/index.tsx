import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/css/main.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);