import React from 'react';
import { motion } from 'framer-motion';

const MeteorShower = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* First Meteor - falls from right-top to left-bottom at 135 degrees */}
      <motion.div
        className="absolute"
        style={{
          right: '10%',
          top: '-10%',
          width: '3px',
          height: '150px',
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          x: [0, -800],
          y: [0, 800],
          opacity: [0, 1, 0.8, 0],
        }}
        transition={{
          duration: 2,
          delay: 0,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'linear',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(139, 92, 246, 0.9) 50%, rgba(99, 102, 241, 0.6) 100%)',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(99, 102, 241, 0.5)',
            transform: 'rotate(45deg)',
          }}
        />
      </motion.div>

      {/* Second Meteor - falls from right-top to left-bottom at 135 degrees (different timing) */}
      <motion.div
        className="absolute"
        style={{
          right: '30%',
          top: '-10%',
          width: '3px',
          height: '150px',
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          x: [0, -800],
          y: [0, 800],
          opacity: [0, 1, 0.8, 0],
        }}
        transition={{
          duration: 2,
          delay: 3.5,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'linear',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(139, 92, 246, 0.9) 50%, rgba(99, 102, 241, 0.6) 100%)',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(99, 102, 241, 0.5)',
            transform: 'rotate(45deg)',
          }}
        />
      </motion.div>

      {/* Third Meteor - falls from right-top to left-bottom at 135 degrees */}
      <motion.div
        className="absolute"
        style={{
          right: '50%',
          top: '-10%',
          width: '3px',
          height: '150px',
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          x: [0, -800],
          y: [0, 800],
          opacity: [0, 1, 0.8, 0],
        }}
        transition={{
          duration: 2,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'linear',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(139, 92, 246, 0.9) 50%, rgba(99, 102, 241, 0.6) 100%)',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(99, 102, 241, 0.5)',
            transform: 'rotate(45deg)',
          }}
        />
      </motion.div>

      {/* Fourth Meteor - falls from right-top to left-bottom at 135 degrees */}
      <motion.div
        className="absolute"
        style={{
          right: '70%',
          top: '-10%',
          width: '3px',
          height: '150px',
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          x: [0, -800],
          y: [0, 800],
          opacity: [0, 1, 0.8, 0],
        }}
        transition={{
          duration: 2,
          delay: 4.8,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'linear',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(139, 92, 246, 0.9) 50%, rgba(99, 102, 241, 0.6) 100%)',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(99, 102, 241, 0.5)',
            transform: 'rotate(45deg)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default MeteorShower;
