
import React from 'react';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import About from './components/About';
const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Navigationbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;