import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PhotoList from './components/PhotoList';
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<PhotoList />} />
      </Routes>
    </div>
  );
}

export default App;