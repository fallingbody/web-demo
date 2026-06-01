import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Menu() {
  return (
    <PageTransition>
      <div className="page-container glass-panel">
        <h1 className="page-title">Our Menu</h1>
        <div className="menu-grid">
          <div className="menu-card">
            <img src="/assets/butter_chicken_1780219146272.png" alt="Butter Chicken" />
            <h2>Murgh Makhani</h2>
          </div>
          <div className="menu-card">
            <img src="/assets/masala_chai_1780219175389.png" alt="Masala Chai" />
            <h2>Authentic Masala Chai</h2>
          </div>
          <div className="menu-card">
            <img src="/assets/garlic_naan_1780219160803.png" alt="Garlic Naan" />
            <h2>Tandoori Garlic Naan</h2>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
