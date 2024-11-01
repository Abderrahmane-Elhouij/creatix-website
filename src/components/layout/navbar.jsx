import React, { useState } from 'react';
import '../style/navbar.css'; 
import logo from '../../images/creatix-logo.png';
import menuIcon from '../../images/menu-icon.png'; 

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="header">
        <img src={logo} alt="creatix-logo" />
        <p className="logo">Creatix</p>
      </div>
      
      
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <img src={menuIcon} alt="menu" />
      </div>

      
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <li className="home-link"><a href="/">Home</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
