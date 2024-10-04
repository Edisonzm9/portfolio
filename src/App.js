import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Usas Bootstrap en tu proyecto
import { Routes, Route, Navigate } from 'react-router-dom';  // Importar enrutador
import Home from './pages/home';
import About from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects.js';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className={`content ${scrolled ? 'scrolled' : ''}`}>
        <Routes>
          {/* Definición de rutas */}
          <Route path="/" element={<Navigate replace to="#/about" />} />
          <Route path="#/about" element={<About />} />
          <Route path="#/projects" element={<Projects />} />

          {/* Manejo de rutas no encontradas (404) */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
