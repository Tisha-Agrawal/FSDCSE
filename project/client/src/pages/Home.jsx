import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Header Section */}
    <header className="header">
      <div className="container">
        <h1 className="header-title">Dauji Building Materials Suppliers</h1>
        <nav className="nav-links">
          <a href="#about" className="nav-item">About Us</a>
          <a href="#products" className="nav-item">Products</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>
      </div>
    </header>

    {/* Hero Section */}
    <section className="hero">
      <h1 className="hero-title">Welcome to Dauji Building Materials Suppliers</h1>
      <p className="hero-text">
        Supplying premium building materials for all your construction needs. Trusted by professionals for quality and reliability.
      </p>
      <Link to="/login" className="cta-button">Explore Our Products</Link>
    </section>

    {/* About Section */}
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">
          Dauji Building Materials Suppliers has been serving the construction industry for over a decade. We are dedicated to providing high-quality building materials to help bring your projects to life.
        </p>
      </div>
    </section>

    {/* Products Section */}
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3 className="product-title">Cement</h3>
            <p className="product-description">High-quality cement for all types of construction projects.</p>
          </div>
          <div className="product-card">
            <h3 className="product-title">Bricks</h3>
            <p className="product-description">Durable bricks available in various sizes and finishes.</p>
          </div>
          <div className="product-card">
            <h3 className="product-title">Steel</h3>
            <p className="product-description">Top-grade steel for structural strength and durability.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-text">
          Reach out to us for any inquiries or to learn more about our products.
        </p>
        <p className="contact-info">Phone: +1 (123) 456-7890</p>
        <p className="contact-info">Email: info@daujibuildingmaterials.com</p>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Dauji Building Materials Suppliers. All rights reserved.</p>
      </div>
    </footer>
  </div>

    


  )
}

export default Home