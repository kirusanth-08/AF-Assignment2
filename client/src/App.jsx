import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import MarsRover from './components/MarsRover';
import APOD from './components/APOD';
import Photos from './components/Photos';
import About from './components/About';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { authMiddleware } from './middleware/authMiddleware'; 

const PrivateRoute = ({ element, ...rest }) => {
  
  const isAuthenticated = authMiddleware(); // Call authMiddleware to check authentication
  console.log(isAuthenticated)
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/apod" element={<PrivateRoute element={<APOD />} />} /> {/* Wrap APOD component with PrivateRoute */}
        <Route path="/marsrover" element={<MarsRover />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
