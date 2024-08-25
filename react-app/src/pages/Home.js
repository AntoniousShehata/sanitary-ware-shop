import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">


      <section className="hero">
        <img src="images/hero-banner.jpg" alt="Sanitary Ware" />
        <div className="hero-text">
          <h2>Your One-Stop Shop for Quality Sanitary Ware</h2>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          <div className="category-item">
            <img src="images/category1.jpg" alt="Toilets" />
            <p>Toilets</p>
          </div>
          <div className="category-item">
            <img src="images/category2.jpg" alt="Sinks" />
            <p>Sinks</p>
          </div>
          <div className="category-item">
            <img src="images/category3.jpg" alt="Showers" />
            <p>Showers</p>
          </div>
          <div className="category-item">
            <img src="images/category4.jpg" alt="Kitchens" />
            <p>Kitchens</p>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product">
            <img src="images/product1.jpg" alt="Product 1" />
            <h3>Product Name 1</h3>
            <p>$99.99</p>
          </div>
          <div className="product">
            <img src="images/product2.jpg" alt="Product 2" />
            <h3>Product Name 2</h3>
            <p>$129.99</p>
          </div>
          <div className="product">
            <img src="images/product3.jpg" alt="Product 3" />
            <h3>Product Name 3</h3>
            <p>$89.99</p>
          </div>
          <div className="product">
            <img src="images/product4.jpg" alt="Product 4" />
            <h3>Product Name 4</h3>
            <p>$149.99</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Abosefen and Tamave Irini. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a> | 
          <a href="/contact">Contact Us</a> | 
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
