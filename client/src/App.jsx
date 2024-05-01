import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import MarsRover from './components/MarsRover';
import APOD from './components/APOD';
import Photos from './components/Photos';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Menu /></>} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/marsrover" element={<MarsRover />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  </Router>
);

export default App;