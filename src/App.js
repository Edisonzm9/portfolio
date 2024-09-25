
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home';
import About from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects.js'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate replace to="/about" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Projects" element={<Projects />} /> 
      </Routes>
    </Router>
  );
}

export default App;
