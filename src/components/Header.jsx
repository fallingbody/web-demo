import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  initial: { opacity: 0, y: '-100%' },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { opacity: 0, y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

const linkVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 + (i * 0.1), ease: [0.76, 0, 0.24, 1] } }),
  exit: { opacity: 0, y: 50, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }
};

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/story', label: 'Our Story' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/locations', label: 'Locations' },
  { path: '/contact', label: 'Contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/">Maharaja</Link>
        </div>
        <button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mega-menu glass-panel"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="menu-container">
              <div className="menu-links">
                {navLinks.map((link, i) => (
                  <motion.div 
                    custom={i} 
                    variants={linkVariants} 
                    initial="initial" 
                    animate="animate" 
                    exit="exit" 
                    key={link.path}
                  >
                    <Link to={link.path} className="menu-item" onClick={() => setIsOpen(false)}>
                      <span className="menu-text">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
