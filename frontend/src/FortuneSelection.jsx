import React from 'react';
import { motion } from 'framer-motion';

const FortuneSelection = ({ onSelect }) => {
  const cookies = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h1 className="headline-lg" style={{ marginBottom: '1rem' }}>YOUR FORTUNE AWAITS...</h1>
        <p className="body-md" style={{ color: 'var(--color-text-muted)' }}>Choose a cookie to reveal your fortune!</p>
      </motion.div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', maxWidth: '800px' }}>
        {cookies.map((id) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.1, y: -10, rotate: [-2, 2, -2, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(id)}
            style={{ cursor: 'pointer', position: 'relative' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
          >
            <img 
              src="/cookie-closed.png" 
              alt="Fortune Cookie" 
              style={{ width: '120px', height: '120px', objectFit: 'contain', filter: 'drop-shadow(0 10px 15px rgba(125, 86, 45, 0.2))' }} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FortuneSelection;
