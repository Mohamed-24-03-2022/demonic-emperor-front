import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisableDevtool from 'disable-devtool';


const root = ReactDOM.createRoot(document.getElementById('root'));
DisableDevtool();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
