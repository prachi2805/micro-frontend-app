import React from "react";
import "./Header.scss";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="menu-button" onClick={onMenuToggle}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
          <h1 className="logo">Micro Frontend App</h1>
        </div>

        <div className="header-right">
          <nav className="nav">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/about" className="nav-link">
              About
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </nav>

          <div className="user-menu">
            <div className="user-avatar">
              <span>JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
