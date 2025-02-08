// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <h1>
          Hello, I'm <span>Dilip Kumar Reddy Bireddy</span>
        </h1>
        <p>Front-end Developer | React Enthusiast</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
