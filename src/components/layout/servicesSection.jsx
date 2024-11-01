// src/components/ServicesSection.js
import React from 'react';
import '../style/servicesSection.css';

function ServicesSection() {
  return (
    <section className="services">
      <span className='tagline'>Our servServices</span>
      <h2>Innovative Solutions for Your Business</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Web Design</h3>
          <p>Crafting visually stunning websites that captivate your audience.</p>
          <span>Discover More</span>
        </div>
        <div className="service-item">
          <h3>SEO Strategies</h3>
          <p>Boosting your online visibility with advanced SEO techniques.</p>
          <span>Learn More</span>
        </div>
        <div className="service-item">
          <h3>Social Media</h3>
          <p>Engage your target market through strategic social media <br /> campaigns.</p>
          <span>Explore Now</span>
        </div>
        <div className="service-item">
          <h3>Analytics</h3>
          <p>Measuring and optimizing performance to drive success.</p>
          <span>Get Insights</span>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
