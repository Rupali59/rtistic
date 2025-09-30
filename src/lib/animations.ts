import { Variants, Transition } from 'framer-motion';

/**
 * Shared animation variants for consistent animations across the application
 * These variants are optimized for performance and reusability
 */

// Basic fade animations
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

// Scale animations
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
};

export const scaleInUp: Variants = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 }
};

// Stagger animations for lists
export const staggerContainer: Variants = {
  initial: {},
  animate: {}
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0
  }
};

// Hover animations
export const hoverScale: Variants = {
  hover: { 
    scale: 1.05
  },
  tap: { scale: 0.95 }
};

export const hoverLift: Variants = {
  hover: { 
    y: -5
  }
};

// Button animations
export const buttonHover: Variants = {
  hover: { 
    scale: 1.02
  },
  tap: { scale: 0.98 }
};

// Page transition animations
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Utility function to create delayed animations
export const createDelayedAnimation = (baseAnimation: Variants, delay: number) => ({
  ...baseAnimation,
  transition: { duration: 0.6, delay }
});

// Common transition configurations
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: "easeOut"
};

export const fastTransition: Transition = {
  duration: 0.3,
  ease: "easeInOut"
};
