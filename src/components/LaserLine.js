import { motion } from 'framer-motion';

function LaserLine() {
  return (
    <div className="flex justify-center relative h-8 overflow-hidden">
      {/* Animated laser line that moves across */}
      <motion.div
        className="absolute w-48 sm:w-56 h-px bg-gradient-to-r from-transparent via-orange-500 via-yellow-400 to-transparent shadow-lg shadow-orange-400/70"
        animate={{
          x: ['-100%', '100%'],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

export default LaserLine;
