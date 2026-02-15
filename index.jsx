import React from 'react'
import ReactDOM from 'react-dom'
import './src/i18n';
import './index.css';
import App from './src/App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

const root = createRoot(container); 

// 3. 使用 root.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
); 