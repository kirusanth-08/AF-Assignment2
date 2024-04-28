import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar z-50 fixed flex justify-around items-center bg-black bg-opacity-20 text-white w-full">
      <div className="font-extrabold">
        <h1 className="text-lg">SpaceInsights®</h1>
      </div>
      <div className="flex justify-between items-center w-1/5">
        <Link to="/" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Home</Link>
        <Link to="/contact" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Contact</Link>
        <Link to="/support" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Support</Link>
      </div>
    </div>
  );
};

export default Navbar;