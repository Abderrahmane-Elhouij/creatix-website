// src/components/Footer.js
import React from "react";
import "../style/footer.css";
import logo from '../../images/creatix-logo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-list">
        <div className="footer-items">
          <span className="head">Key Feautures</span>
          <p className="key-words">Web Design</p>
          <p className="key-words">SEO Optimization</p>
          <p className="key-words">Content Strategy</p>
          <p className="key-words">Social Media Management</p>
          <p className="key-words">Analytics Tracking</p>
        </div>
        <div className="footer-items">
          <span className="head">Our Products</span>
          <p className="key-words">Websites</p>
          <p className="key-words">Mobile Apps</p>
          <p className="key-words">E-commerce Solutions</p>
          <p className="key-words">Digital Marketing</p>
          <p className="key-words">Brand Identity</p>
        </div>
        <div className="footer-items">
          <span className="head">About Us</span>
          <p className="key-words">Our Team</p>
          <p className="key-words">Mission & Vision</p>
          <p className="key-words">Client Testimenials</p>
          <p className="key-words">Partnerships</p>
          <p className="key-words">Carrers</p>
        </div>
        <div className="footer-items">
          <span className="head">Follow Us</span>
          <p className="key-words">LinkedIn</p>
          <p className="key-words">Twitter</p>
          <p className="key-words">Instagram</p>
          <p className="key-words">Facebook</p>
          <p className="key-words">YuTube</p>
        </div>
      </div>
      <div className="sign">
        <img src={logo} alt="creatix-logo" />
        <p>Creatix</p>
      </div>
      <p className="copyrights">&copy; 2022 Creatix. All rights reserved.</p>
    </div>
  );
}

export default Footer;
