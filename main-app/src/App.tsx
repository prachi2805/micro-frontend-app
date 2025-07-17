import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./App.scss";

const App1 = React.lazy(() => import("app1/App"));
const App2 = React.lazy(() => import("app2/App"));

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Header onMenuToggle={toggleSidebar} />

        <div className="app-body">
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

          <main className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app1/*" element={<App1 />} />
                <Route path="/app2/*" element={<App2 />} />
              </Routes>
            </Suspense>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
