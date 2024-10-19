import React from 'react';

const About = () => {
    return (
        <div id='about'className='flex flex-col md:flex-row bg-tertiary px-5'>
            <div className='md:w-1/2 py-5'>
                <img src="/assets/avatar-image_2.png" alt="" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center'>
                <h1 className='text-5xl font-title'>About Me</h1> <br />
                <p className='text-2xl font-text'>Hello, I'm Arunachalam, a passionate MERN stack developer with a strong background in building dynamic and responsive web applications. <br />
                    I have a solid foundation in MongoDB, Express.js, React, and Node.js, and I am dedicated to delivering high-quality solutions that meet client needs. <br />
                    I thrive on challenges and am always eager to learn and grow in the ever-evolving tech landscape. <br />
                    I'm excited to connect with like-minded individuals and explore new opportunities in the tech world.
                </p>
                </div>
            </div>
        </div>
    );
};

export default About;