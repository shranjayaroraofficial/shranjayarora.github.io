import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        id: 1,
        title: 'Short Film A',
        description: 'A captivating short film about the journey of self-discovery.',
        image: 'path/to/imageA.jpg',
        link: 'https://linktofilmA.com'
    },
    {
        id: 2,
        title: 'Documentary B',
        description: 'An insightful documentary exploring environmental issues.',
        image: 'path/to/imageB.jpg',
        link: 'https://linktofilmB.com'
    },
    {
        id: 3,
        title: 'Music Video C',
        description: 'A vibrant music video showcasing artistic expression.',
        image: 'path/to/imageC.jpg',
        link: 'https://linktofilmC.com'
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-list">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        image={project.image} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;