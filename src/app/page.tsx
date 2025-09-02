'use client'
import React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section py-5"
        style={{
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          color: 'var(--light-text)',
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Premium Spices for Authentic Flavors</h1>
              <p className="lead mb-4">
                Discover the finest collection of spices that bring the rich flavors of traditional cuisine to your kitchen. From aromatic Indian spices to exotic herbs, we offer quality products that enhance every dish.
              </p>
              <a href="/products" className="btn btn-light btn-lg px-4 py-2 fw-bold">
                Explore Our Spices
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="/asset/WhatsApp Image 2024-06-04 at 11.37.28_a95ac451.jpg"
                alt="Spices Banner"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--primary-color)' }}>
            Featured Spices
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div
              className="col"
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
              style={{ transition: 'transform 0.3s ease' }}
            >
              <div className="card h-100 shadow-sm border-0">
                <img src="/asset/WhatsApp Image 2024-06-04 at 11.37.29_13786939.jpg" className="card-img-top" alt="Turmeric" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Turmeric</h5>
                  <p className="card-text">
                    Pure, organic turmeric powder known for its vibrant color and numerous health benefits.
                  </p>
                  <a href="/products" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col"
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
              style={{ transition: 'transform 0.3s ease' }}
            >
              <div className="card h-100 shadow-sm border-0">
                <img src="/asset/WhatsApp Image 2024-06-04 at 11.37.29_ec055126.jpg" className="card-img-top" alt="Cumin" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Cumin Seeds</h5>
                  <p className="card-text">Whole cumin seeds that add a warm, earthy flavor to curries and spice blends.</p>
                  <a href="/products" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col"
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
              style={{ transition: 'transform 0.3s ease' }}
            >
              <div className="card h-100 shadow-sm border-0">
                <img src="/asset/WhatsApp Image 2024-06-04 at 11.37.30_1b1448ac.jpg" className="card-img-top" alt="Cardamom" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Cardamom</h5>
                  <p className="card-text">Premium green cardamom pods that bring a sweet, aromatic flavor to desserts and teas.</p>
                  <a href="/products" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/asset/WhatsApp Image 2024-06-04 at 11.37.30_1cc29045.jpg"
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4 fw-bold" style={{ color: 'var(--primary-color)' }}>
                Why Choose Our Spices?
              </h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check-circle me-3" style={{ color: 'var(--secondary-color)' }}></i>
                  <strong>Premium Quality:</strong> Sourced from the finest farms and processed with care.
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle me-3" style={{ color: 'var(--secondary-color)' }}></i>
                  <strong>Authentic Flavors:</strong> Traditional spices that capture the essence of authentic cuisine.
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle me-3" style={{ color: 'var(--secondary-color)' }}></i>
                  <strong>Health Benefits:</strong> Many of our spices offer natural health and wellness benefits.
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle me-3" style={{ color: 'var(--secondary-color)' }}></i>
                  <strong>Expert Support:</strong> Our team is here to help you choose the perfect spices for your needs.
                </li>
              </ul>
              <a href="/about" className="btn btn-outline-primary btn-lg mt-3">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
