import { motion } from 'framer-motion';
import React from 'react';
import './AboutMe.css';
import foto from '../../assets/images/foto.png';
import c1 from '../../assets/images/c1.png';
import c2 from '../../assets/images/c2.png';
import c3 from '../../assets/images/c3.png';
import c4 from '../../assets/images/c4.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// Importación del carrusel de react-bootstrap
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
  return (
    <div className="about-page-container">
      {/* Sección About Me */}
      <div className="about-container">
        <motion.div
          className="photo-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <img src={foto} alt="Foto" className="profile-photo" />
        </motion.div>
        <motion.div
          className="text-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
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
          transition={{ duration: 2 }}
        >
          My Title and Certifications
        </motion.h2>

        {/* Carrusel de Certificados */}
        <div className="carousel-container">
          <Carousel fade interval={3000}>
            <Carousel.Item>
              <div className="carousel-slide">
                <p>Ingeniero en Software - Universidad Técnica del Norte</p>
                <img src={c1} alt="Certificado 1" className="certificate-image" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-slide">
                <p>Business Model Canvas Essentials - CertiProf</p>
                <img src={c2} alt="Certificado 2" className="certificate-image" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-slide">
                <p>Introduction to Cybersecurity - CISCO</p>
                <img src={c3} alt="Certificado 3" className="certificate-image" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-slide">
                <p>English Proficiency B1 - LAUEMPRENDE EP</p>
                <img src={c4} alt="Certificado 4" className="certificate-image" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Línea temporal de experiencia */}
      <div className="experience-section">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          My Professional Experience
        </motion.h2>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #3498db' }} // Flecha azul
            date="2024 - Present"
            iconStyle={{ background: '#3498db', color: '#fff' }} // Fondo azul, icono blanco
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Developer - Reparauto Ibarra</h3>
            <p>
              Development of the company website and automotive management ERP using Angular.js and Node.js to optimize internal processes like inventory control and customer management.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #e74c3c' }} // Flecha roja
            date="2022"
            iconStyle={{ background: '#e74c3c', color: '#fff' }} // Fondo rojo
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern - Plus Servicios Tecnológicos</h3>
            <p>
              Worked on internal management modules using technologies like MongoDB, PostgreSQL, and PHP, optimizing internal processes.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>


    </div>
  );
};

export default AboutMe;
