import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Micro Frontend App</h3>
            <p>A modern approach to building scalable web applications</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/app1">App 1</a>
              </li>
              <li>
                <a href="/app2">App 2</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://github.com/prachi2805">GitHub</a>
              </li>
              <li>
                <a href="mailto:prachiarora0501@gmail.com">Gmail</a>
              </li>
              <li>
                <a href="https://linkedin.com/prachiarora5">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Micro Frontend App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
