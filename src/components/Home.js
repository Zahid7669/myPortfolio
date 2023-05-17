import React from 'react';
import '../assets/styles/Home.css';
import lichu from "../assets/images/project-1.png"

function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>Hi, I'm John Doe</h1>
        <p>I'm a software developer with a passion for building high-quality software. I specialize in web development and have experience in a variety of programming languages and frameworks.</p>
        <p>Take a look at my portfolio to see some of my recent projects.</p>
      </div>
      <div className="highlights">
        <div className="highlight">
          <img src={lichu} alt="Project 1" />
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="highlight">
          <img src="../assets/images/project-1.png" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="highlight">
        <img src={require('../assets/images/project-1.png').default} alt="Project 1" />
          <h3>Project 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
