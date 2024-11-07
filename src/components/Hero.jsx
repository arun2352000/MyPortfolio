import React from 'react';
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";


const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row px-5 py-32 justify-center bg-secondary'>
            <div className='md:w-1/2  py-28 justify-center'>
                <h2 className='text-5xl font-bold font-text'>Hello,</h2>
                <h1 className=' text-5xl font-title'>I'm <span className='font-bold'>Arunachalam</span>,</h1>
                <h3 className='text-3xl font-text' >
                    a MERN stack web developer bringing a fresh perspective to web
                    design.
                </h3>
                <div className='flex py-10' >
                    <a target="_blank"href="https://github.com/arun2352000" className='pr-5 hover:text-white' ><AiOutlineGithub size={30}/></a>
                    <a target="_blank"href="" className='pr-5 hover:text-white'><AiOutlineFacebook size={30}/></a>
                    <a target="_blank"href="http://www.linkedin.com/in/arunachalam2352000" className='pr-5 hover:text-white'><AiOutlineLinkedin size={30}/></a>
                    <a target="_blank"href=""></a>
                </div>
            </div>
            <img
                src="/assets/avatar-image.png"
                alt=""
                className="md:w-1/3 px-5 justify-center"
            />
        </div>
    );
};

export default Hero;