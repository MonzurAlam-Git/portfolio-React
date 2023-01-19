import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const BannerHome = () => {
    return (
        <div className='px-6'>
            <div className="hero " style={{ backgroundImage: `url("https://i.ibb.co/fkNJrZb/layered-steps-haikei-2.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-left text-neutral-content">
                    <div className="p-24">
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
                        <a className="btn btn-info font-bold mb-2" href='https://drive.google.com/uc?id=1pbKxUIG4Jc8_J-XXHQJP2I2FVVyBr4VF&export=download'>Download Resume</a> <br />
                        <a className="btn btn-info font-bold" href='https://drive.google.com/uc?id=1pbKxUIG4Jc8_J-XXHQJP2I2FVVyBr4VF&export=download'>Watch Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;