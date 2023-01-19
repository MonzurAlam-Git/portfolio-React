import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <>
            <h1 className="text-4xl text-center font-bold text-cyan-600 pt-12">Projects </h1>
            <div className='grid grid-cols-3 p-24'>

                {projects.map(project => <Project key={project.id} project={project} ></Project>)}
            </div>
        </>


    );
};

export default Projects;