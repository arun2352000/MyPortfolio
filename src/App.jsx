
import React from 'react';
import Home from './components/Home.jsx';
import Navigationbar from './components/Navigationbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import About from './components/About.jsx';
import Skils from './components/Skils.jsx';
import Portfolios from './components/Portfolios.jsx';
import ContactForm from './components/ContactForm.jsx';
const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Navigationbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Skils" element={<Skils/>}/>
            <Route path="/portfolio"element={<Portfolios/>}/>
            <Route path="/contactform" element={<ContactForm/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;