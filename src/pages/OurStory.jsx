import React from 'react';
import PageTransition from '../components/PageTransition';

export default function OurStory() {
  return (
    <PageTransition>
      <div className="page-container glass-panel story-layout">
        <div className="text-col">
          <h1 className="page-title">Our Story</h1>
          <p>Born from the royal kitchens of North India, Maharaja was established to preserve the sacred art of slow cooking. We import our spices directly from the misty hills of Kerala, ensuring that every bite transports you to a world of culinary opulence and authentic heritage.</p>
        </div>
        <div className="img-col">
          <img src="/assets/indian_restaurant_interior_1780219131481.png" alt="Royal Dining Interior" />
        </div>
      </div>
    </PageTransition>
  );
}
