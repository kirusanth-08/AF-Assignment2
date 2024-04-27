import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import MarsRover from './components/MarsRover/MarsRover';

const App = () => (
  <div className="App">
    <Navbar />
    <Home />
    <Menu />
    <MarsRover />
  </div>
);

export default App;