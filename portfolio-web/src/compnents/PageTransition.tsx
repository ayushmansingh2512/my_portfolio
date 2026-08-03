import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Easing } from 'framer-motion';
import './pageTransition.css';

interface PageTransitionProps {
  children: React.ReactNode;
  triggerKey?: string | number;
}

const loaderEase: Easing = [0.76, 0, 0.24, 1];
const viewEase: Easing = [0.76, 0, 0.2, 1];

const backdropVariants = {
  initial: { opacity: 0, pointerEvents: 'none' as const },
  exit: { 
    opacity: 1, 
    pointerEvents: 'auto' as const,
    transition: { duration: 0.5, ease: loaderEase } 
  }
};

const fillVariants = {
  initial: { scaleY: 0, pointerEvents: 'none' as const },
  exit: { 
    scaleY: 1, 
    pointerEvents: 'auto' as const,
    transition: { duration: 0.5, ease: loaderEase } 
  }
};

const enterFillVariants = {
  initial: { opacity: 1, pointerEvents: 'auto' as const },
  animate: { 
    opacity: 0, 
    pointerEvents: 'none' as const,
    transition: { duration: 0.4, ease: "easeOut" as const } 
  }
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children, triggerKey }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkLayout = () => {
      setIsMobile(window.innerWidth <= window.innerHeight);
    };
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={triggerKey || 'default'} style={{ width: '100%' }}>
        {/* Enter phase overlay (fades out when content mounts) */}
        <motion.div
          className="cb-loader"
          initial={{ display: "block" }}
          animate={{ display: "none", transition: { delay: 0.4 } }}
          style={{ pointerEvents: "none" }}
        >
          <motion.div
            className="cb-loader-fill"
            variants={enterFillVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>

        {/* Content View */}
        <motion.div
          id="view-main"
          initial={{ opacity: 0, y: isMobile ? "2vh" : "3vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isMobile ? "-3vh" : "-5vh" }}
          transition={{ duration: 0.5, ease: viewEase }}
        >
          {children}
        </motion.div>

        {/* Exit phase overlay (slides up when content unmounts) */}
        <motion.div
          className="cb-loader"
          initial={{ display: "none" }}
          exit={{ display: "block" }}
        >
          <motion.div
            className="cb-loader-backdrop"
            variants={backdropVariants}
            initial="initial"
            exit="exit"
          />
          <motion.div
            className="cb-loader-fill"
            style={{ transformOrigin: "bottom" }}
            variants={fillVariants}
            initial="initial"
            exit="exit"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
