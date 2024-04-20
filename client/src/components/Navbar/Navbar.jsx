import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h1>Navbar</h1>
      </div>
      <div className="navbar_links">
        <a href="#" className="navbar_link">Home</a>
        <a href="#" className="navbar_link">Contact</a>
        <a href="#" className="navbar_link">Support</a>
      </div>
    </div>
  );
};

export default Navbar;