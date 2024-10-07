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
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'; // íconos sólidos

// Aquí se definen las rutas de las imágenes que representarían cada skill
import htmlImg from '../../assets/images/html.png';
import cssImg from '../../assets/images/css.png';
import jsImg from '../../assets/images/js.png';
import pythonImg from '../../assets/images/python.png';
import javaImg from '../../assets/images/java.png';
import reactImg from '../../assets/images/react.png';
import angularImg from '../../assets/images/angular.png';
import dockerImg from '../../assets/images/docker.png';
import bootstrapImg from '../../assets/images/bootstrap.png';
import androidImg from '../../assets/images/android.png';
import flutterImg from '../../assets/images/flutter.png';
import ionicImg from '../../assets/images/ionic.png';

import nodeImg from '../../assets/images/node.png';
import webImg from '../../assets/images/web.png';
import psqlImg from '../../assets/images/psql.png';
import mongoImg from '../../assets/images/mongo.png';
import mysqlImg from '../../assets/images/mysql.png';
import kuberImg from '../../assets/images/mysql.png';
import gitImg from '../../assets/images/git.png';
import gitHubImg from '../../assets/images/github.png';

import b4aImg from '../../assets/images/B4A.png';
import phpImg from '../../assets/images/php.png';
import cImg from '../../assets/images/c.png';
import tsImg from '../../assets/images/ts.png';



const skillsData = [
  { category: 'Programming Languages', items: ['HTML', 'CSS', 'JavaScript','TypeScript', 'Python', 'Java', 'PHP', 'C#'], images: [htmlImg, cssImg, jsImg,tsImg, pythonImg, javaImg,phpImg,cImg] },
  { category: 'Frameworks and Libraries', items: ['React', 'Angular', 'Bootstrap'], images: [reactImg, angularImg, bootstrapImg] },
  { category: 'Mobile App Development', items: ['Android Studio', 'Flutter', 'Ionic','B4A'], images: [androidImg, flutterImg, ionicImg, b4aImg] }, // Aquí puedes agregar las imágenes correspondientes
  { category: 'Backend and Full-Stack', items: ['Node.js', 'Web Scraping'], images: [nodeImg, webImg] }, // Reemplaza las imágenes con las correctas
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL'], images: [psqlImg, mongoImg, mysqlImg] }, // Reemplaza las imágenes con las correctas
  { category: 'CI/CD', items: ['Docker', 'Kubernetes', 'Git','GitHub'], images: [dockerImg, kuberImg, gitImg, gitHubImg] }, // Reemplaza las imágenes con las correctas
];

const AboutMe = () => {
  return (
    <div className="about-page-container">
      {/* Sección About Me */}
      <div className="about-container">
        <motion.div
          className="photo-container circle-animation"
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
          <p>
            Software engineer graduated from the Universidad Técnica del Norte, specializing in web, mobile, and desktop development.
            Focused on creating efficient and scalable solutions using technologies such as Angular, React, Python, and relational and
            non-relational databases. Currently deepening knowledge in React and exploring data science. Passionate about problem-solving
            and building products that positively impact users. Motivated by learning new tools and collaborating in multidisciplinary teams.
          </p>
        </motion.div>
      </div>

      {/* Sección de Certificados */}
      <div className="certificates-section">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          My Title and Certifications
        </motion.h2>

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
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          My Professional Experience
        </motion.h2>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #e67e22' }}
            date="2024 - Present"
            iconStyle={{ background: '#e67e22', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Developer - Reparauto Ibarra</h3>
            <p>
              Development of the company website and automotive management ERP using Angular.js and Node.js
              to optimize internal processes like inventory control and customer management.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #2ecc71' }}
            date="Apr 2023 - Aug 2023"
            iconStyle={{ background: '#2ecc71', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Developer - Municipio de Ibarra</h3>
            <p>
              Developed the backend, optimizing communication between modules and automating administrative and operational processes.
              Improved the database, enhancing traceability, transparency, and efficiency in the management of infractions and penalties.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #e74c3c' }}
            date="2022"
            iconStyle={{ background: '#e74c3c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern - Plus Servicios Tecnológicos</h3>
            <p>
              Worked on internal management modules using technologies like MongoDB, PostgreSQL, and PHP, optimizing internal processes.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/* Nueva Sección de Skills */}
      <div className="skills-section">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          My Skills
        </motion.h2>
        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{skillCategory.category}</h3>
              <ul>
                {skillCategory.items.map((item, i) => (
                  <li key={i}>
                    <img src={skillCategory.images[i]} alt={item} className="skill-image" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
