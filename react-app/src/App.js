import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Product from './pages/Product';  // Ensure this is the correct import
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />  // Ensure this is correctly routed
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
