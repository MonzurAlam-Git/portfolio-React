import React from 'react';
import { NewsHeaderCard } from 'react-ui-cards';

const Project = ({ project }) => {
    const { id, name, details, livelink, ss, techs } = project;
    return (
        <div>

            <div className='mb-20 mx-10'>
                <NewsHeaderCard
                    className='card w-96 text-center font-bold border-b-4 border-cyan-500 rounded-2xl '
                    href={livelink}
                    thumbnail={ss}
                    title={name}
                    tags={techs.map(tech => tech)}
                />
                {/* <div className="card w-96 lg:w-96 md:w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/VBhCQK7/cool-background-3.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <NewsHeaderCard
                        className='card w-96 text-center font-bold border-b-4 border-cyan-500'
                        href={livelink}
                        thumbnail={ss}
                        title={name}
                        tags={techs.map(tech => tech)}
                    />
                </div>
            </div> */}

            </div>
        </div>


    );
};

export default Project;