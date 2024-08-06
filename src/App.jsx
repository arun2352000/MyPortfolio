import React from 'react';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigationbar/>
      <Routes>
        <Route path="/" wlwment={<Home />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;