import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';





ReactDOM.render(
  <BrowserRouter>

      <App />


  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
