import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-items">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/one" className="nav-link">One</Link>
          <Link to="/two" className="nav-link">Two</Link>
          <Link to="/three" className="nav-link">Three</Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/one" className="nav-link" onClick={toggleMenu}>One</Link>
          <Link to="/two" className="nav-link" onClick={toggleMenu}>Two</Link>
          <Link to="/three" className="nav-link" onClick={toggleMenu}>Three</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
