import React from 'react';
import { NewsHeaderCard } from 'react-ui-cards';

const Project = ({ project }) => {
    const { id, name, details, livelink, ss, techs } = project;
    return (
        // <div className="card w-96 bg-base-100 shadow-xl image-full">
        //     <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Shoes!</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>
        <div className='m-5 '>
            <NewsHeaderCard
                className='card w-96 text-center font-bold border-b-4 border-cyan-500'
                href={livelink}
                thumbnail={ss}
                title={name}
                tags={techs.map(tech => tech)}

            // author='Daily Sport'
            // date='Feb 2, 2018'

            // tags={tech.values()}
            />
        </div>
    );
};

export default Project;