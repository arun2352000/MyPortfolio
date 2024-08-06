import React from 'react';
import './style/home.css'
const Home = () => {
    return (
      <div>
        <div>
          <h2>Hello,</h2>
          <h1>I'm Arunachalam,</h1>
          <h3>
            a MERN stack web developer bringing a fresh perspective to web
            design.
          </h3>

          <img
            src="/src/assets/avatar-image.png"
            alt=""
            className="profile-image img-fluid"
          />
        </div>
        
      </div>
    );
};

export default Home;