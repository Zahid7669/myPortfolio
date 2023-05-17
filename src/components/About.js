import React from 'react';
import '../assets/styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <img
          className="about-img"
          src="src/assets/images/profile.jpg"
          alt="Profile"
        />
        <p className="about-text">
          Hi, my name is John Doe and I'm a software developer based in
          San Francisco. I'm passionate about creating elegant and
          efficient solutions to complex problems. My expertise lies in
          building web applications using React, Node.js, and other
          modern technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
