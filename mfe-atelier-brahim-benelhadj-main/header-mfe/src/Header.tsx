import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Header</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">À propos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
