import React from "react";
import Navbar from "./layout/navbar";
import HeroSection from "./layout/heroSection ";
import StatsSection from "./layout/stateSection";
import ServicesSection from "./layout/servicesSection";
import Footer from "./layout/footer";
import ContactSection from "./layout/contaxtSection";
import "./style/hero.css";

const HomePage = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="content">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <StatsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
