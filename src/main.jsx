import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Renderizar a aplicação no elemento com id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Remover a mensagem de carregamento no primeiro render, se existir
const loaderElement = document.getElementById('loader');
if (loaderElement) {
  loaderElement.style.display = 'none';
}