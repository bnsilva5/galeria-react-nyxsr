import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ChipBackground from './components/ChipBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChipBackground/>
    <App />
  </React.StrictMode>
);
