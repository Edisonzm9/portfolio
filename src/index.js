import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Opcional, para estilos globales
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Importar BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envolver la aplicación con BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Para la medición del rendimiento (opcional)
reportWebVitals();
