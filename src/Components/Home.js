import React, { useEffect, useState } from 'react';

const Home = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => setProjects(data))
    }, [])

    return (
        <div>
            <div className='flex justify-center bg-black p-10'>
                <h1 className=" font-bold text-xl text-red-600">Sorry! Portfolio is on construction, Will be completed around 24/01/2023</h1>
                <h1 className=" font-bold text-xl text-red-600">Meanwhile check out my projects below</h1>
            </div>
            <div>
                {
                    projects.map(project =>
                        <div className="flex">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">{project.name}</h1>
                                    <p className="py-6">{project.details}</p>
                                    <a className="btn btn-primary" href={project.livelink} alt="livelink">Live Site</a>
                                    {/* <p className="btn btn-primary" >{project.livelink}</p> */}
                                    {/* <link className="btn btn-primary" href={project.livelink} alt="livelink">Live Link</link> */}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Home;