// /frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'; // Import your global styles if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
