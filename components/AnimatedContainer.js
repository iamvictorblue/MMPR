import { motion } from "framer-motion";

const AnimatedContainer = ({ children, className, delay = 0 }) => {
  const fadeInUp = {
    initial: {
      y: 30,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.99],
        delay: delay
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer; 