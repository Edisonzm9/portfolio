import { motion } from 'framer-motion';
import React from 'react';
import './AboutMe.css';
import foto from '../../assets/images/foto.png';
import c1 from '../../assets/images/c1.png';
import c2 from '../../assets/images/c2.png';
import c3 from '../../assets/images/c3.png';

const AboutMe = () => {
  return (
    <div className="about-page-container">
      {/* Sección About Me */}
      <div className="about-container">
        <motion.div
          className="photo-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={foto} alt="Foto" className="profile-photo" />
        </motion.div>
        <motion.div
          className="text-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>About me...</h1>
          <p>Software engineer graduated from the Universidad Técnica del Norte, specializing in web, mobile, and desktop development. 
            Focused on creating efficient and scalable solutions using technologies such as Angular, React, relational and non-relational 
            databases, and Python. Currently deepening knowledge in React and exploring data science. Passionate about problem-solving 
            and building products that positively impact users. Learning new tools and collaborating in multidisciplinary teams are key 
            motivations.</p>
        </motion.div>
      </div>

      {/* Nueva sección para el título y certificados */}
      <div className="certificates-section">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          My Title and Certifications
        </motion.h2>
        <motion.div
          className="certificates-container"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="certificate-item">
          <p>Ingeniero en Software - Universidad Técnica del Norte</p>
            <img src={c1} alt="Certificado 1" className="certificate-image" />
            <p></p>
          </div>
          <div className="certificate-item">
          <p>Business Model Canvas Essentials - CertiProf</p>
            <img src={c2} alt="Certificado 2" className="certificate-image" />
            <p></p>
          </div>
          <div className="certificate-item">
          <p>Introduction to Cybersecurity - CISCO</p>
            <img src={c3} alt="Certificado 3" className="certificate-image" />
            <p></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
