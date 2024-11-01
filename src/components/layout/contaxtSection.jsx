// src/components/ContactSection.js
import React from 'react';
import '../style/contactSection.css'
import email from '../../images/email.png';
import phone from '../../images/phone.png';
import address from '../../images/adress.png';
import social_media from '../../images/social-media.png';
import working_hours from '../../images/working-hours.png';
import feedback from '../../images/feedback.png';

function ContactSection() {
  return (
    <section className="contact">
      <h2>Get In Touch With Us</h2>
      <div className="contact-buttons">
        <button className="btn btn-primary">Let's work together</button>
        <button className="btn btn-secondary">Contact Us</button>
      </div>
      <div className="contact-info">
        <div className="contact-items">
          <img src={email} alt="email-icon" />
          <span className="head">Email</span>
          <span className="description">Drop us a message at info@youragency.com</span>
        </div>
        <div className="contact-items">
          <img src={phone} alt="phone-icon" />
          <span className="head">Phone</span>
          <span className="description">call us directiy at +1 (123) 456-7890</span>
        </div> 
        <div className="contact-items">
          <img src={address} alt="address-icon" />
          <span className="head">Address</span>
          <span className="description">Visit us at 123 Main Street, City, Country</span>
        </div> 
        <div className="contact-items">
          <img src={social_media} alt="social-media-icon" />
          <span className="head">Social Media</span>
          <span className="description">Connect with us on Facebook, Twitter, and LinkedIn</span>
        </div>
        <div className="contact-items">
          <img src={working_hours} alt="working-hours-icon" />
          <span className="head">Working Hours</span>
          <span className="description">We are available Monday to Friday, 9 AM to 5 PM</span>
        </div>
        <div className="contact-items">
          <img src={feedback} alt="feedback-icon" />
          <span className="head">Feedback</span>
          <span className="description">Share your thoughts and suggestions with us for <br /> improvement</span>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
