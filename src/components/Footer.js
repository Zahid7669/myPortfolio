import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://github.com/myusername"><FaGithub /></a>
        <a href="https://linkedin.com/in/myusername"><FaLinkedin /></a>
        <a href="https://twitter.com/myusername"><FaTwitter /></a>
      </div>
      <p className="footer__text">Copyright &copy; 2023 My Portfolio.
      All rights reserved.</p>
    </footer>
  );
}

export default Footer;
