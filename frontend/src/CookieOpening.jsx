import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CookieOpening = ({ fortune, onContinue }) => {
  const [stage, setStage] = useState('idle'); // idle -> shaking -> cracked -> split -> paper_emerging -> revealed

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Wait a moment before starting
      await new Promise(r => setTimeout(r, 500));
      
      // Step 2: Shake
      setStage('shaking');
      await new Promise(r => setTimeout(r, 800));

      // Step 3: Crack (swap image to halves but close together)
      setStage('cracked');
      await new Promise(r => setTimeout(r, 300));

      // Step 4: Split
      setStage('split');
      await new Promise(r => setTimeout(r, 400));

      // Step 5 & 6 & 7: Paper emerges and unfolds
      setStage('paper_emerging');
      await new Promise(r => setTimeout(r, 800));

      // Step 8: Reveal text
      setStage('revealed');
    };

    sequence();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Closed Cookie */}
        {(stage === 'idle' || stage === 'shaking') && (
          <motion.img
            src="/cookie-closed.png"
            alt="Closed Cookie"
            animate={stage === 'shaking' ? {
              x: [-5, 5, -5, 5, 0],
              rotate: [-2, 2, -2, 2, 0],
            } : {}}
            transition={{ duration: 0.4, repeat: 2 }}
            style={{ position: 'absolute', width: '200px', zIndex: 10 }}
          />
        )}

        {/* Fortune Paper */}
        {(stage === 'split' || stage === 'paper_emerging' || stage === 'revealed') && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0, y: 50, scaleX: 0.5 }}
            animate={
              stage === 'paper_emerging' || stage === 'revealed' ? { opacity: 1, scaleY: 1, scaleX: 1, y: -80 } : {}
            }
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            style={{
              position: 'absolute',
              zIndex: 5,
              background: '#fff',
              padding: '20px 40px',
              border: '1px solid var(--color-outline)',
              boxShadow: 'var(--shadow-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '280px',
              minHeight: '80px',
              transformOrigin: 'bottom center',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={stage === 'revealed' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="headline-lg"
              style={{ fontSize: '1.25rem', textAlign: 'center', color: 'var(--color-primary)' }}
            >
              {fortune}
            </motion.p>
          </motion.div>
        )}

        {/* Left Half */}
        {stage !== 'idle' && stage !== 'shaking' && (
          <motion.img
            src="/cookie-left.png"
            alt="Cookie Left Half"
            initial={{ x: 20, rotate: 0 }}
            animate={
              stage === 'split' || stage === 'paper_emerging' || stage === 'revealed'
                ? { x: -60, rotate: -15 }
                : {}
            }
            transition={{ type: 'spring', stiffness: 100 }}
            style={{ position: 'absolute', width: '100px', zIndex: 10 }}
          />
        )}

        {/* Right Half */}
        {stage !== 'idle' && stage !== 'shaking' && (
          <motion.img
            src="/cookie-right.png"
            alt="Cookie Right Half"
            initial={{ x: -20, rotate: 0 }}
            animate={
              stage === 'split' || stage === 'paper_emerging' || stage === 'revealed'
                ? { x: 60, rotate: 15 }
                : {}
            }
            transition={{ type: 'spring', stiffness: 100 }}
            style={{ position: 'absolute', width: '100px', zIndex: 10 }}
          />
        )}

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={stage === 'revealed' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{ marginTop: '2rem' }}
      >
        <button className="btn-primary" onClick={onContinue}>
          CONTINUE →
        </button>
      </motion.div>

    </div>
  );
};

export default CookieOpening;
