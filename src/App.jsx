
import React from 'react';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Skils from './components/Skils.jsx';

const App = () => {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <Hero />
      <About/>
      <Skils />
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default App;