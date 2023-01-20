import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import BannerHome from './BannerHome';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';

const HomeUpdated = () => {
    return (
        <div>
            {
                toast.error('Sorry! Portfolio is on construction, Will be completed around 22/01/2023', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <BannerHome></BannerHome>

            {/* Services  */}
            {/* <ServicesIProvide></ServicesIProvide> */}
            {/* Project showcase  */}
            <Projects></Projects>
            {/* Testimonial  */}
            {/* Subscribe Newsletter  */}
            {/* Contact  */}
            <Contact></Contact>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default HomeUpdated;