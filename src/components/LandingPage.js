import React from "react";
import "./../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="hero">
        <h1>AI-Powered Learning for Rural India</h1>
        <p>Learn in your language with AI-driven personalized education.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature-card">🎓 Personalized Learning</div>
        <div className="feature-card">🤖 AI Tutor Support</div>
        <div className="feature-card">📶 Works Offline</div>
      </section>
    </div>
  );
};

export default LandingPage;
