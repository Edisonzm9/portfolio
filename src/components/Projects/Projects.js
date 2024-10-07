import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import p1 from '../../assets/images/p1.png';

const Projects = () => {
    return (
        <div className='cards'>
            {/* Primer proyecto con imagen */}
            <Card className='card'>
                <Card.Img variant="top" src={p1} />
                <Card.Body>
                    <Card.Title>Web Page - Reparauto Ibarra</Card.Title>
                    <Card.Text>
                        In this project, I built a web page for Reparauto Ibarra. This web page was developed using Angular.js and deployed on Firebase.
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                        <a href="https://reparauto-ibarra.web.app/" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary">Go to project</Button>
                        </a>
                    </div>
                </Card.Body>
            </Card>

            {/* Segundo proyecto con iframe para el video */}
            <Card className='card'>
                <iframe
                    className="card-img-top"
                    src="https://drive.google.com/file/d/1qdcoqUIp5TyZ493Ubb8j0dWTnaJPv8-b/preview"
                    width="100%"
                    height="300"
                    title="Reparauto Ibarra Project Overview Video"
                    allow="autoplay"
                ></iframe>
                <Card.Body>
                    <Card.Title>Development of the ERP under construction for Reparauto Ibarra</Card.Title>
                    <Card.Text>
                    It includes modules for vehicle reception, inventory management, and internal process control. Built with AngularJS for the frontend, Node.js for the backend, PostgreSQL as the database, and Docker for container management.                   </Card.Text>
  
                </Card.Body>
            </Card>
        </div>
    );
};

export default Projects;
