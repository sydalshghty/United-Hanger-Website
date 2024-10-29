import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Master from './master';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='United-Hanger-Website'>
      <Master/>
    </BrowserRouter>
);