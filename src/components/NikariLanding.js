import { motion } from 'framer-motion';
import LaserLine from './LaserLine';

function NikariLanding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const handleGalleryClick = () => {
    alert('Navigate to gallery');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="text-center w-full px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-wider bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          NIKARI
        </motion.h1>

        {/* Laser Line */}
        <motion.div variants={itemVariants} className="mb-6">
          <LaserLine />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 text-sm sm:text-base mb-8 tracking-widest uppercase"
          variants={itemVariants}
        >
          Cosplay Photos – Visual Experience
        </motion.p>

        {/* Button */}
        <motion.button
          className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
          variants={itemVariants}
          onClick={handleGalleryClick}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter the Gallery
        </motion.button>

        {/* Footer text */}
        <motion.p
          className="text-gray-600 text-xs sm:text-sm mt-8 tracking-widest uppercase"
          variants={itemVariants}
        >
          Enter the Gallery
        </motion.p>
      </motion.div>
    </div>
  );
}

export default NikariLanding;
