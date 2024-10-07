import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import p1 from '../../assets/images/p1.png';
import videoReparauto from '../../assets/videos/videoReparauto.mp4'; // Asegúrate de colocar el video en la carpeta adecuada

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

            {/* Segundo proyecto con video */}
            <Card className='card'>
                <video className="card-img-top" controls>
                    <source src={videoReparauto} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Card.Body>
                    <Card.Title>Web Page - Reparauto Ibarra (Video Overview)</Card.Title>
                    <Card.Text>
                        This is a video overview of the web page I built for Reparauto Ibarra, showcasing the main features and design. Developed using Angular.js and deployed on Firebase.
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
