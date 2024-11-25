import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Lessons and insights <br />
          <span className="highlight">from 8 years</span>
        </h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <button className="register-btn">Register</button>
      </div>
      <div className="hero-image">
        <img src="your-image-path.jpg" alt="Logo Person working on a computer" />
      </div>
    </section>
  );
};

export default HeroSection;
