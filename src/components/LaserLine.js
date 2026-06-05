import { motion } from 'framer-motion';

function LaserLine() {
  return (
    <div className="flex justify-center relative h-8">
      {/* Static laser line - thin and precise */}
      <div className="relative w-48 sm:w-56 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-md shadow-orange-400/60">
        {/* Traveling bright point - the "light" that travels along the laser */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent blur-sm"
          animate={{
            left: ['-50%', '100%'],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Extra glow for the bright center */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-px bg-yellow-200 blur-sm opacity-70"
          animate={{
            left: ['-25%', '105%'],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
}

export default LaserLine;
