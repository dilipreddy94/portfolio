// src/components/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="intro">
          Hi there! 👋 I'm <span>Dilip</span>, a passionate React Native Developer with a knack for crafting beautiful and intuitive user interfaces. My goal is to blend design and functionality to create seamless web experiences that delight users.
        </p>

        <div className="what-i-do">
          <h3>What I Do</h3>
          <div className="card-container">
            <div className="card">
              <h4>💻 Web Development</h4>
              <p>
                I specialize in building responsive and interactive websites using modern frameworks like React, Vue.js, and Angular.
              </p>
            </div>
            <div className="card">
              <h4>🎨 UI/UX Design</h4>
              <p>
                With a keen eye for detail, I ensure every project is aesthetically pleasing and user-friendly, leveraging tools like Figma, Adobe XD, and Sketch.
              </p>
            </div>
            <div className="card">
              <h4>⚙️ Performance Optimization</h4>
              <p>
                I prioritize performance and scalability, writing clean, maintainable code that ensures fast-loading, efficient applications.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <h3>Skills & Technologies</h3>
          <ul>
            <li><strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript</li>
            <li><strong>Frameworks & Libraries:</strong> React, Redux, Next.js, Tailwind CSS</li>
            <li><strong>Tools:</strong> Git, Webpack, Vite, VS Code</li>
            <li><strong>Other Skills:</strong> API integration, Responsive Design, Cross-Browser Compatibility</li>
          </ul>
        </div>

        <div className="about-numbers">
          <h3>About Me in Numbers</h3>
          <ul>
            <li>🌐 <strong>6+</strong> years of professional development experience</li>
            <li>📂 <strong>4</strong> projects successfully delivered</li>
            <li>⭐ <strong>100%</strong> client satisfaction</li>
          </ul>
        </div>

        <div className="hobbies">
          <h3>When I'm Not Coding...</h3>
          <p>
            You’ll find me exploring the world of design, playing video games, or diving into creative projects like sketching or writing.
          </p>
        </div>

        <p className="cta">
          Let's connect and create something amazing together! 🚀
        </p>
      </div>
    </section>
  );
};

export default About;
