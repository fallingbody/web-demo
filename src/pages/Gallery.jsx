import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Gallery() {
  return (
    <PageTransition>
      <div className="page-container glass-panel">
        <h1 className="page-title">Gallery</h1>
        <div className="gallery-grid">
          <img src="/assets/indian_restaurant_interior_1780219131481.png" alt="Gallery 1" />
          <img src="/assets/butter_chicken_1780219146272.png" alt="Gallery 2" />
          <img src="/assets/masala_chai_1780219175389.png" alt="Gallery 3" />
        </div>
      </div>
    </PageTransition>
  );
}
