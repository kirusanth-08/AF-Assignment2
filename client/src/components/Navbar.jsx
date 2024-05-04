import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { logout } from '../middleware/authMiddleware';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('name'));

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem('name'));
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  return (
    <div className="navbar z-50 fixed flex justify-around items-center bg-black bg-opacity-20 text-white w-full">
      <div className="font-extrabold">
        <h1 className="text-lg">SpaceInsights®</h1>
      </div>
      <div className="flex justify-between items-center w-1/5">
        <Link to="/" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Home</Link>
        <Link to="/about" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">About</Link>
        {isAuthenticated ? (
          <div className="relative" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
            <button className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">{isAuthenticated}</button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white text-black rounded-md shadow-md">
                <button onClick={handleLogout} className="block p-2 hover:bg-gray-200">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
