import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Micro Frontend Architecture</h1>
        <p>
          This is a demonstration of a main application with integrated micro
          frontends
        </p>
        <div className="hero-buttons">
          <a href="/app1" className="button primary">
            Go to App 1
          </a>
          <a href="/app2" className="button secondary">
            Go to App 2
          </a>
        </div>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>App 1</h3>
            <p>
              A sample micro frontend application with modern React features
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>App 2</h3>
            <p>
              Another micro frontend showcasing independent deployment
              capabilities
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Modular</h3>
            <p>Each application can be developed and deployed independently</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
