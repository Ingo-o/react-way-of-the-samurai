import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import PiratesApp from "./App";

ReactDOM.render(<PiratesApp />, document.getElementById('root'));

// Из-за React.StrictMode массив users отрисовывался 2 раза подряд.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
