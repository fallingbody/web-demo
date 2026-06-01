import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Locations() {
  return (
    <PageTransition>
      <div className="page-container glass-panel">
        <h1 className="page-title">Locations</h1>
        <ul className="locations-list">
          <li>
            <h2>Downtown Studio</h2>
            <p>123 Creative Ave, NY</p>
          </li>
          <li>
            <h2>Westside Lounge</h2>
            <p>45 Sunset Blvd, LA</p>
          </li>
        </ul>
      </div>
    </PageTransition>
  );
}
