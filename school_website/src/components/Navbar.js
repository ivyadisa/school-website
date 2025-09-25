import React, { useState } from "react";
import "./Navbar.css";
import { X, Menu } from "lucide-react"; // Using lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">MySchool</div>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#admission">Admissions</a></li>
        <li><a href="#academics">Academics</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger / Close Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </nav>
  );
};

export default Navbar;
