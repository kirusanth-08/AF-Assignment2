import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { logout } from '../middleware/authMiddleware';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from the authMiddleware
    // You can also redirect the user to the login page or perform any other actions after logout
  };

  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('name');

  return (
    <div className="navbar z-50 fixed flex justify-around items-center bg-black bg-opacity-20 text-white w-full">
      <div className="font-extrabold">
        <h1 className="text-lg">SpaceInsights®</h1>
      </div>
      <div className="flex justify-between items-center w-1/5">
        <Link to="/" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Home</Link>
        <Link to="/about" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">About</Link>
        {/* Conditionally render profile button or login button */}
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
