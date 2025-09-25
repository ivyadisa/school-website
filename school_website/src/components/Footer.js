import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / About */}
        <div className="footer-col">
          <h2 className="footer-logo">Bright Future Academy</h2>
          <p>
            Empowering students through quality education, creativity, and 
            lifelong learning. Together, we inspire the next generation of 
            leaders and innovators.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#student-life">Student Life</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 Bright Future Academy, Nairobi, Kenya</p>
          <p>📞 +254 700 123 456</p>
          <p>✉️ info@ourschool.ac.ke</p>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Subscribe for school news & updates.</p>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bright Future Academy | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
