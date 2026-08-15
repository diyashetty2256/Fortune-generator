import React from 'react';
import { motion } from 'framer-motion';

const EventReveal = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: '4rem 2rem 2rem 2rem' }}>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}
      >
        <p className="body-md" style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          Your next fortune is waiting...
        </p>
        <p className="body-md" style={{ marginBottom: '0.5rem' }}>AT</p>
        <h1 className="headline-lg" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          AUTHORCRAFT
        </h1>
        <p className="body-md" style={{ fontStyle: 'italic', marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
          — Come find it. —
        </p>
        
        <div style={{ 
          background: 'var(--color-surface-dim)', 
          padding: '2rem', 
          borderRadius: '1rem', 
          boxShadow: 'var(--shadow-soft)',
          marginBottom: '4rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p className="body-md" style={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Date</p>
              <p className="headline-lg" style={{ fontSize: '1.5rem' }}>20 October 2024</p>
            </div>
            <div>
              <p className="body-md" style={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Time</p>
              <p className="headline-lg" style={{ fontSize: '1.5rem' }}>2:00 PM</p>
            </div>
            <div>
              <p className="body-md" style={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Venue</p>
              <p className="headline-lg" style={{ fontSize: '1.5rem' }}>Main Amphitheatre</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ marginTop: 'auto', textAlign: 'center', paddingBottom: '2rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
          <img src="/cookie-left.png" alt="Cookie Half" style={{ width: '40px' }} />
          <div style={{ 
            background: '#fff', 
            padding: '5px 15px', 
            border: '1px solid var(--color-outline)',
            fontSize: '0.85rem'
          }}>
            <span style={{ color: 'var(--color-primary)' }}>SEE YOU AT AUTHORCRAFT! ✨</span>
          </div>
          <img src="/cookie-right.png" alt="Cookie Half" style={{ width: '40px' }} />
        </div>
      </motion.div>

    </div>
  );
};

export default EventReveal;
