import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 40, filter: 'blur(10px)' },
  in: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  out: { opacity: 0, y: -40, filter: 'blur(10px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="page-wrapper"
    >
      {children}
    </motion.div>
  );
}
