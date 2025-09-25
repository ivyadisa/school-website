import React, { useEffect, useState } from 'react';
import "./Home.css";

const Home = () => {
  const images = [
    "/images/bg1.jpg", 
    "/images/bg2.jpg",
    "/images/bg3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change background after every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='homepage' 
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="overlay">
        <h1>Welcome to our school!</h1>
        <p>Nurturing Character, Knowledge, and Excellence</p>
      </div>

      <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://wa.me/254743594486" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-whatsapp"></i>
  </a>
</div>

    </div>
  )
}

export default Home;
