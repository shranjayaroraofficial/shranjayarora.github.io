import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
    const featuredProjects = [
        {
            title: 'Project One',
            description: 'A brief description of Project One.',
            image: 'path/to/image1.jpg',
        },
        {
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            image: 'path/to/image2.jpg',
        },
        {
            title: 'Project Three',
            description: 'A brief description of Project Three.',
            image: 'path/to/image3.jpg',
        },
    ];

    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Filmmaking Portfolio</h1>
                <p>Explore my work and projects that showcase my filmmaking talent.</p>
                <section className="featured-projects">
                    <h2>Featured Projects</h2>
                    <div className="project-list">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                title={project.title} 
                                description={project.description} 
                                image={project.image} 
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;