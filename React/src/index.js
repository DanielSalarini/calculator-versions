import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './assets/components/Calculator'

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <h1>React</h1>
    <h3>Calculator</h3>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);