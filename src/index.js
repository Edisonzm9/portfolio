import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Opcional, para estilos globales
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';  // Cambiar a HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>  {/* Usar HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

// Para la medición del rendimiento (opcional)
reportWebVitals();
