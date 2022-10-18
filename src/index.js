import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  background-color: #E5E5E5;
  margin: 0;
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
