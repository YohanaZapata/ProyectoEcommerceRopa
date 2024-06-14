import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Routes
import App from './App.jsx';
import './index.css';
//import Home from './pages/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    
      
        <App />
           
    
  </React.StrictMode>,
);