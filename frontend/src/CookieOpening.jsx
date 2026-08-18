import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CookieOpening = ({ fortune, onContinue }) => {
  const [stage, setStage] = useState('idle'); // idle -> shaking -> cracked -> split -> paper_emerging -> revealed

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Wait a moment before starting
      await new Promise(r => setTimeout(r, 400));

      // Step 2: Shake
      setStage('shaking');
      await new Promise(r => setTimeout(r, 700));

      // Step 3: Crack
      setStage('cracked');
      await new Promise(r => setTimeout(r, 300));

      // Step 4: Split
      setStage('split');
      await new Promise(r => setTimeout(r, 400));

      // Step 5: Paper emerges
      setStage('paper_emerging');
      await new Promise(r => setTimeout(r, 700));

      // Step 6: Revealed
      setStage('revealed');
    };

    sequence();
  }, []);

  const quoteText = fortune?.quote || "Somewhere between the pages, your fortune is waiting at....";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', position: 'relative', overflow: 'hidden', padding: '2rem' }}>

      <div style={{ position: 'relative', width: '320px', height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        {/* Closed Cookie */}
        {(stage === 'idle' || stage === 'shaking') && (
          <motion.img
            src="/cookie-closed.png"
            alt="Closed Cookie"
            animate={stage === 'shaking' ? {
              x: [-8, 8, -8, 8, 0],
              rotate: [-4, 4, -4, 4, 0],
            } : {}}
            transition={{ duration: 0.4, repeat: 2 }}
            style={{ position: 'absolute', width: '220px', zIndex: 10, filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.6))' }}
          />
        )}

        {/* Fortune Paper Emerging */}
        {(stage === 'split' || stage === 'paper_emerging' || stage === 'revealed') && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0, y: 40, scaleX: 0.6 }}
            animate={
              stage === 'paper_emerging' || stage === 'revealed' ? { opacity: 1, scaleY: 1, scaleX: 1, y: -90 } : {}
            }
            transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
            style={{
              position: 'absolute',
              zIndex: 5,
              background: '#fef3c7',
              backgroundImage: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
              padding: '24px 32px',
              borderRadius: '12px',
              border: '2px solid #fde047',
              boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '260px',
              maxWidth: '90%',
              width: 'max-content',
              transformOrigin: 'bottom center',
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
              ✨ FORTUNE UNLOCKED
            </span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={stage === 'revealed' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-kalam"
              style={{ fontSize: '1.25rem', textAlign: 'center', color: '#78350f', margin: 0, lineHeight: 1.4 }}
            >
              "{quoteText}"
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
                ? { x: -80, rotate: -20, y: 20 }
                : {}
            }
            transition={{ type: 'spring', stiffness: 100 }}
            style={{ position: 'absolute', width: '110px', zIndex: 10, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}
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
                ? { x: 80, rotate: 20, y: 20 }
                : {}
            }
            transition={{ type: 'spring', stiffness: 100 }}
            style={{ position: 'absolute', width: '110px', zIndex: 10, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}
          />
        )}

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={stage === 'revealed' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ marginTop: '2.5rem' }}
      >
        <button className="btn-primary" onClick={onContinue}>
          REVEAL YOUR INVITATION 🎉
        </button>
      </motion.div>

    </div>
  );
};

export default CookieOpening;
