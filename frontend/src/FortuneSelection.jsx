import React from 'react';
import { motion } from 'framer-motion';

const FortuneSelection = ({ onSelect }) => {
  const cookies = [1, 2, 3, 4, 5, 6];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem 1rem' }}>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <div style={{
          display: 'inline-block',
          backgroundColor: '#7c3a1e',
          color: '#fff',
          padding: '4px 16px',
          borderRadius: '9999px',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          marginBottom: '1rem',
          boxShadow: '0 4px 12px rgba(124, 58, 30, 0.3)'
        }}>
          Choose a cookie to reveal your fortune
        </div>

        <h1 className="font-rounded" style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', color: '#28180d', marginBottom: '0.75rem', fontWeight: 800 }}>
          YOUR FORTUNE AWAITS.......
        </h1>

      </motion.div>

      {/* Single Row of 6 Fortune Cookies */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '900px',
        marginBottom: '3rem',
        paddingBottom: '0.5rem'
      }}>
        {cookies.map((id) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.12, y: -8, rotate: [-2, 2, -2, 0] }}
            whileTap={{ scale: 0.92 }}
            onClick={() => onSelect(id)}
            style={{
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '1.25rem 0.5rem',
              border: '1px solid #e8d5c4',
              boxShadow: '0 4px 16px rgba(124, 58, 30, 0.1)',
              transition: 'border-color 0.2s ease',
              minWidth: '120px',
              width: '120px',
              flexShrink: 0
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.08 }}
          >
            <img
              src="/cookie-closed.png"
              alt="Fortune Cookie"
              style={{ width: '110px', height: '110px', objectFit: 'contain', filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.5))' }}
            />
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default FortuneSelection;
