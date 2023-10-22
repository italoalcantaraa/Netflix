import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
