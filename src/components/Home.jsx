import React from 'react';
import './style/home.css'
const Home = () => {
    return (
      <div>
        
        <div className='flex'>
          <div className='w-1/2'>
            <h2 className=''>Hello,</h2>
            <h1>I'm Arunachalam,</h1>
            <h3>
              a MERN stack web developer bringing a fresh perspective to web
              design.
            </h3>
            </div>
            <img 
              src="/src/assets/avatar-image.png"
              alt=""
              className=""
            />
        </div>
        
      
      <div className=''>
          
        <h1>About Me</h1> <br />
        <p>Hello, I'm Arunachalam, a passionate MERN stack developer with a strong background in building dynamic and responsive web applications.
           I have a solid foundation in MongoDB, Express.js, React, and Node.js, and I am dedicated to delivering high-quality solutions that meet client needs.
           I thrive on challenges and am always eager to learn and grow in the ever-evolving tech landscape.
           I'm excited to connect with like-minded individuals and explore new opportunities in the tech world.
           </p>
          
        </div>
        
      </div>
    );
};

export default Home;