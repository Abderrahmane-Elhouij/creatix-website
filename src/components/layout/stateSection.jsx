// src/components/StatsSection.js
import React from "react";
import "../style/statsSection.css";

function StatsSection() {
  return (
    <section className="stats">
      <div className="stat-box">
        <p>2k+ Projects Completed</p>
        <h2>2,513</h2>
      </div>
      <div className="stat-box">
        <p>85% Client Satisfaction Rate</p>
        <h2>85%</h2>
      </div>
      <div className="stat-box">
        <p>30k Users Engaged</p>
        <h2>30,456</h2>
      </div>
    </section>
  );
}

export default StatsSection;
