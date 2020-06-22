import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cors from 'cors';

const aCors = require("cors");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

aCors.use(cors());