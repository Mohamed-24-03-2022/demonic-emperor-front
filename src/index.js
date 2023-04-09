import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisableDevtool from 'disable-devtool';


const root = ReactDOM.createRoot(document.getElementById('root'));
// window.addEventListener('contextmenu', (e) => e.preventDefault());
// DisableDevtool();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
