import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ToastContainer } from "react-toastify";
import Routing from './components/Routing/Routing';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routing />
    <ToastContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
