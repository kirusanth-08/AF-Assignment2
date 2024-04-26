import React from "react";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="fixed flex justify-around items-center bg-black bg-opacity-20 text-white w-full">
      <div className="font-extrabold">
        <h1 className="text-lg">SpaceInsights</h1>
      </div>
      <div className="flex justify-between items-center w-1/5">
        <a href="#" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Home</a>
        <a href="#" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Contact</a>
        <a href="#" className="p-3 px-5 transition-all duration-500 hover:bg-white hover:bg-opacity-20">Support</a>
      </div>
    </div>
  );
};

export default Navbar;