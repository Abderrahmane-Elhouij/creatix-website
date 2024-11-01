// src/components/HeroSection.js
import React from "react";
import "../style/heroSection.css";
import arrow from "../../arrow.png";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="t1">
          Empowering <span className="highlight">Brands</span> <br />
          Through Creative <br />
          <span className="highlight">Solutions</span>.
        </h1>
        <p className="t2">
          We deliver cutting-edge web development, design, and marketing 
          services that empower brands to create stunning and impactful 
          digital experiences. With over 10 years of experience, our team is
          
          dedicated to innovation and collaboration.
        </p>
      </div>

      <div className="bottom">
          <img src={arrow} alt="arrow" className="arrow" />
        <div className="hero-buttons">
          <button className="btn btn-primary">Let's work together</button>
          <button className="btn btn-secondary">View projects</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
