import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Projects = () => {
    return (
        <div className='cards'>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Web Page - Reparauto Ibarra</Card.Title>
                        <Card.Text>
                            In this project I build a web page to Reparauto Ibarra. This web page contain information about process
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Projects;
