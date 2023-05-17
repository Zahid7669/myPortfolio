import React from 'react';
import logo from '../assets/images/profile.jpg';
import '../assets/styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="/" className="header__link">
              Home
            </a>
          </li>
          <li className="header__item">
            <a href="/about" className="header__link">
              About
            </a>
          </li>
          <li className="header__item">
            <a href="/portfolio" className="header__link">
              Portfolio
            </a>
          </li>
          <li className="header__item">
            <a href="/blog" className="header__link">
              Blog
            </a>
          </li>
          <li className="header__item">
            <a href="/contact" className="header__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
