// src/pages/About.js
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section with About Us + Our Story */}
      <section className="about-hero">
        <div className="about-hero-text slide-left">
          <h1>About Us</h1>
          <h2>Our Story</h2>
          <p>
            Founded in 2007, <span className="highlight">Bright Future Academy</span> 
            has been committed to providing quality education that nurtures creativity, 
            discipline, and lifelong learning. We believe in empowering students with 
            the skills and knowledge they need to thrive in today’s world.
          </p>
        </div>

        <div className="about-hero-image slide-right">
          <img src="/images/bg2.jpg" alt="School" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-cards fade-in">
        <div className="card">
          <h3>🎯 Our Mission</h3>
          <p>
            To provide a holistic education that fosters academic excellence, 
            personal growth, and social responsibility in every student.
          </p>
        </div>
        <div className="card">
          <h3>🌍 Our Vision</h3>
          <p>
            To be a center of excellence in education, producing confident and 
            innovative leaders who will shape a better future.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values fade-in">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value">Excellence</div>
          <div className="value">Integrity</div>
          <div className="value">Innovation</div>
          <div className="value">Discipline</div>
        </div>
      </section>

      {/* Gallery */}
      <section className="about-gallery fade-in">
        <h2>School Life</h2>
        <div className="gallery-grid">
          <img src="/images/bg1.jpg" alt="Classroom" className="fade-in" />
          <img src="/images/bg2.jpg" alt="Library" className="fade-in" />
          <img src="/images/bg3.jpg" alt="Students" className="fade-in" />
        </div>
      </section>
    </div>
  );
}

export default About;
