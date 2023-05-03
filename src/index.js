import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Interval from './App';
import Timer from "./inter";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Interval />
      <Timer/>
  </React.StrictMode>
);
