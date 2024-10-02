import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import p1 from '../../assets/images/p1.png';

const Projects = () => {
    return (
        <div className='cards'>
            <Card className='card'>
                <Card.Img variant="top" src={p1} />
                <Card.Body>
                    <Card.Title>Web Page - Reparauto Ibarra</Card.Title>
                    <Card.Text>
                        In this project, I built a web page for Reparauto Ibarra. This web page was developed using Angular.js.
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                        <a href="https://reparauto-ibarra.web.app/" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary">Go to project</Button>
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Projects;
