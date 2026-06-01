import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="page-container center-content glass-panel">
        <h1 className="page-title">Get in Touch</h1>
        <a href="mailto:hello@crescente.com" className="huge-link">hello@crescente.com</a>
      </div>
    </PageTransition>
  );
}
