import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MarsRover from './pages/MarsRover';
import APOD from './pages/APOD';
import Photos from './pages/Photos';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { authMiddleware } from './middleware/authMiddleware'; 

const PrivateRoute = ({ element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(authMiddleware());

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await authMiddleware(); // Call authMiddleware to check authentication
      setIsAuthenticated(isAuthenticated);
    };
    console.log("auth in app: " + isAuthenticated)
    checkAuthentication();
  }, []);

  return isAuthenticated ? element : <Navigate to="/login" />;
};


const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/apod" element={<PrivateRoute element={<APOD />} />} />
        <Route path="/marsrover" element={<PrivateRoute element={<MarsRover />} />} />
        <Route path="/photos" element={<PrivateRoute element={<Photos />} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
