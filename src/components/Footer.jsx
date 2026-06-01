import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content" style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Stay Updated</h3>
        <p style={{ marginBottom: '2rem', color: '#ccc' }}>Join our newsletter to receive updates on our latest recipes, events, and cafe news.</p>
        <form style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email Address" 
            style={{ padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)', color: 'white', flex: 1, minWidth: '250px', fontSize: '1rem' }} 
            required 
          />
          <button 
            type="submit" 
            style={{ padding: '1rem 2rem', borderRadius: '8px', border: 'none', background: '#ff4d00', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', transition: 'transform 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Subscribe
          </button>
        </form>
      </div>
      <p>&copy; {new Date().getFullYear()} Maharaja. The Royal Taste of India.</p>
    </footer>
  );
}
