import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'; // Ensure the path is correct
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About'; // Ensure this import matches the export in About.js
import Contact from './pages/Contact'; // Ensure this import matches the export in Contact.js
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
