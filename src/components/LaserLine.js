import { motion } from 'framer-motion';

function LaserLine() {
  return (
    <div className="flex justify-center relative h-12">
      {/* Main laser line with gradient */}
      <div className="relative w-64 sm:w-80 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full shadow-lg shadow-orange-400/50">
        {/* Traveling light effect */}
        <motion.div
          className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full blur-sm"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Brighter center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-200 to-transparent blur-md opacity-80"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
}

export default LaserLine;
