import React from 'react';
import './style/home.css'
const Home = () => {
    return (
      <div>
        
        <div className='flex px-5 py-20 justify-center bg-secondary'>
          <div className='w-1/2  py-40 justify-center'>
            <h2 className=''>Hello,</h2>
            <h1>I'm Arunachalam,</h1>
            <h3>
              a MERN stack web developer bringing a fresh perspective to web
              design.
            </h3>
            </div>
            <img 
              src="/assets/avatar-image.png"
              alt=""
              className="w-1/4 px-5 justify-center"
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
        <div>
          <h1>Skills</h1>
          <ol>
            <ul className=''><h1>Frontend Development</h1>
              <li><img src="/assets/htmllogo.png" alt="" /></li>
              <li><img src="/assets/CSSlogo.png" alt="" /></li>
              <li><img src="/assets/jslogo.png" alt="" /></li>
              <li><img src="/assets/reactlogo.png" alt="" /></li>
              <li><img src="/assets/bootstrap.png" alt="" /></li>
              <li><img src="/assets/tailwind.png" alt="" /></li>
              </ul>
            <ul> <h1>Backend Development</h1>
              <li><img src="/assets/nodejslogo.png" alt="" /></li>
              <li><img src="/assets/expresslogo.png" alt="" /></li>
              <li><img src="/assets/mongodblogo.png" alt="" /></li>
              </ul> 
            {/* <li>Database Management</li>  */}
            
            <ul> <h1>Version Control</h1> 
            <li><img src="/assets/gitlogo.png" alt="" /></li>
            </ul>
            </ol>
        </div>

        <div>
          <h1>Projects</h1>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>Project 4</li>
          </ul>
        </div>

        <div>
          <h1>Get in Touch</h1>
          <form action="">
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" required></input><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" required></input><br />
            <label for="message">Message:</label><br />
            <textarea id="message" name="message" required></textarea><br />
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    );
};

export default Home;