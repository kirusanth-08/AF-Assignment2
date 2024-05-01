import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import MarsRover from './components/MarsRover/MarsRover';
import ImageDetail from './components/ImageDetail/ImageDetail';
import Photos from './components/Photos';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Menu /></>} />
        <Route path="/marsrover" element={<MarsRover />} />
        <Route path="/imagedetail" element={<ImageDetail />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  </Router>
);

export default App;