import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="#">Tour-And-Travels</Link>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link services" to="/OurServices">OUR SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OurFleet">OUR FLEET</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OurBlogs">LATEST BLOGS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" tabIndex="-1">CONTACT US</Link>
            </li>
          </ul>

          <div className="online-booking-btn">
            <Link to="/Onlinebooking">
              <button type="button" className="btn">Online Booking</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
