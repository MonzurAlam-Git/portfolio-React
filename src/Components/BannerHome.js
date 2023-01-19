import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const BannerHome = () => {
    return (
        <div className='px-8'>
            <div className="hero " style={{ backgroundImage: `url("https://i.ibb.co/fkNJrZb/layered-steps-haikei-2.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-left text-neutral-content">
                    <div className="p-12">
                        <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
                        <h1 className="mb-5 text-4xl font-bold">I'm <span className='text-cyan-500 mb-5 text-4xl font-bold'><Typewriter
                            words={['Manzurul Alam', 'A Front-End Developer', 'Computer Science Graduated']}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            delaySpeed={1000}
                        ></Typewriter></span></h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-info font-bold">Get Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;