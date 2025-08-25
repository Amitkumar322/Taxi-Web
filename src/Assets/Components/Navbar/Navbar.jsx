import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navbar toggle button ke liye
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
        <div className="logo">
          <h1>Tour and Travel</h1>
        </div>

      {/* Toggle button (mobile view ke liye) */}
      <button className="toggle-btn" onClick={toggleNavbar}>
        ☰
      </button>

      {/* Navbar links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/OurServices">OUR SERVICES</Link></li>
        <li><Link to="/OurFleet">OUR FLEET</Link></li>
        <li><Link to="/OurBlogs">LATEST BLOGS</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <Link to="/Onlinebooking">
        <button className="button-1">Online Booking</button>
      </Link>
      </ul>

      {/* Booking Button */}
      
    </nav>
  );
};
