import React from 'react';
import { motion } from 'framer-motion';
import {
  EtchAJamDesign,
  TamagotchiDesign,
  GameBoyDesign,
  WalkmanDesign,
  PolaroidDesign,
  TypewriterDesign
} from './GadgetDesigns';

const EventReveal = ({ fortune, onReset }) => {
  const renderGadgetDesign = () => {
    switch (fortune?.design) {
      case 'etch-a-jam':
        return <EtchAJamDesign fortuneData={fortune} />;
      case 'tamagotchi':
        return <TamagotchiDesign fortuneData={fortune} />;
      case 'gameboy':
        return <GameBoyDesign fortuneData={fortune} />;
      case 'walkman':
        return <WalkmanDesign fortuneData={fortune} />;
      case 'polaroid':
        return <PolaroidDesign fortuneData={fortune} />;
      case 'typewriter':
        return <TypewriterDesign fortuneData={fortune} />;
      default:
        return <EtchAJamDesign fortuneData={fortune} />;
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      padding: '2rem 1rem 4rem 1rem',
      width: '100%'
    }}>

      {/* Gadget Reveal Render */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}
      >
        {renderGadgetDesign()}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', zIndex: 30 }}
      >
        <button className="btn-primary" onClick={onReset}>
          🥠 OPEN ANOTHER FORTUNE COOKIE
        </button>
      </motion.div>

    </div>
  );
};

export default EventReveal;
