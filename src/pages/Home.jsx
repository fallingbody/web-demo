import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="home-scroll-container">
        {/* Hero Section */}
        <section className="home-section center-content">
          <h1 className="hero-title">Maharaja</h1>
          <p className="hero-subtitle">The Royal Taste of India</p>
        </section>

        {/* Menu Preview Section */}
        <section className="home-section glass-panel">
          <h2 className="page-title">Signatures</h2>
          <div className="menu-grid">
            <div className="menu-card">
              <img src="/assets/butter_chicken_1780219146272.png" alt="Butter Chicken" />
              <h2>Murgh Makhani</h2>
            </div>
            <div className="menu-card">
              <img src="/assets/garlic_naan_1780219160803.png" alt="Garlic Naan" />
              <h2>Tandoori Garlic Naan</h2>
            </div>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/menu" className="huge-link" style={{ fontSize: '2rem' }}>View Full Menu &rarr;</Link>
          </div>
        </section>

        {/* Story Preview Section */}
        <section className="home-section glass-panel story-layout">
          <div className="text-col">
            <h2 className="page-title">The Heritage</h2>
            <p>Steeped in centuries of tradition, we bring the royal recipes of the Mughal emperors straight to your table. Every dish is a masterful blend of rich spices, slow-cooked to absolute perfection.</p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/story" className="huge-link" style={{ fontSize: '2rem' }}>Discover Our Origins &rarr;</Link>
            </div>
          </div>
          <div className="img-col">
            <img src="/assets/indian_restaurant_interior_1780219131481.png" alt="Royal Indian Dining" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="home-section glass-panel">
          <h2 className="page-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Do you offer vegetarian and vegan options?</summary>
              <p>Yes, our menu features a wide variety of authentic Indian vegetarian and vegan dishes, prepared with separate utensils to ensure purity.</p>
            </details>
            <details className="faq-item">
              <summary>Can we book the restaurant for private events?</summary>
              <p>Absolutely. We offer our Royal Dining hall for private events, corporate gatherings, and celebrations. Please contact us for reservations.</p>
            </details>
            <details className="faq-item">
              <summary>How spicy is the food?</summary>
              <p>We honor traditional recipes, but all our dishes can be customized to your preferred spice level, from mild to fiery hot.</p>
            </details>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
