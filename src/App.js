
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home';
import About from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate replace to="/about" />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;
