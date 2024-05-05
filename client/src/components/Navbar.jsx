import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { logout } from '../middleware/authMiddleware';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('name'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCollapsibleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className="navbar z-50 fixed flex flex-col justify-around items-center bg-black bg-opacity-20 text-white w-full">
      <div className="w-full h-full flex justify-around items-center">
        <div className="font-extrabold">
        <h1 className="text-lg p-3 ">SpaceInsights®</h1>
        </div>
        <div className="block sm:hidden cursor-pointer" onClick={ handleCollapsibleToggle }>
          {isMenuOpen ? (
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </div>
        <div className="justify-between items-center w-1/5 sm:flex hidden">
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
      { isMenuOpen && (<div className="flex flex-col text-start">
          <Link to="/" className="p-3 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Home</Link>
          <Link to="/about" className="p-3 transition-all duration-500 hover:bg-white hover:bg-opacity-20">About</Link>
          {isAuthenticated ? (
            <div className="relative" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
              <button className="p-3transition-all duration-500 hover:bg-white hover:bg-opacity-20">{isAuthenticated}</button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white text-black rounded-md shadow-md">
                  <button onClick={handleLogout} className="block p-2 hover:bg-gray-200">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="p-3 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Login</Link>
          )}
      </div>)
      }
    </div>
  );
};

export default Navbar;
