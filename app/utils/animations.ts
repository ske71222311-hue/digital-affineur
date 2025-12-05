"use client";

import { useInView, type Variants, type Transition } from "framer-motion";
import { useRef } from "react";

// Type for easing functions
type EasingFunction = "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";

// ============================================
// ANIMATION VARIANTS
// ============================================

/**
 * Fade in from bottom to top
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as EasingFunction,
    },
  },
};

/**
 * Fade in from top to bottom
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as EasingFunction,
    },
  },
};

/**
 * Fade in from left
 */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as EasingFunction,
    },
  },
};

/**
 * Fade in from right
 */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as EasingFunction,
    },
  },
};

/**
 * Simple fade in
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as EasingFunction,
    },
  },
};

/**
 * Scale up animation
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as EasingFunction,
    },
  },
};

/**
 * Scale on hover - use with whileHover
 */
export const scaleOnHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeInOut" as EasingFunction,
  },
};

/**
 * Scale and lift on hover
 */
export const hoverLift = {
  scale: 1.02,
  y: -5,
  transition: {
    duration: 0.2,
    ease: "easeOut" as EasingFunction,
  },
};

/**
 * Tap/click animation
 */
export const tapScale = {
  scale: 0.98,
};

// ============================================
// STAGGER ANIMATIONS (Parent containers)
// ============================================

/**
 * Container for staggered children animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Slow stagger container
 */
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

/**
 * Fast stagger container
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/**
 * Child item for stagger animation
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as EasingFunction,
    },
  },
};

// ============================================
// SPECIAL ANIMATIONS
// ============================================

/**
 * Number counter animation config
 */
export const counterAnimation: Transition = {
  duration: 2,
  ease: "easeOut" as EasingFunction,
};

/**
 * Pulse animation for attention
 */
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut" as EasingFunction,
  },
};

/**
 * Bounce animation
 */
export const bounce = {
  y: [0, -10, 0],
  transition: {
    duration: 0.6,
    repeat: Infinity,
    repeatDelay: 1,
    ease: "easeOut" as EasingFunction,
  },
};

/**
 * Slide in from bottom (for modals, drawers)
 */
export const slideInBottom: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as EasingFunction,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn" as EasingFunction,
    },
  },
};

/**
 * Page transition
 */
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as EasingFunction,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn" as EasingFunction,
    },
  },
};

// ============================================
// ALL ANIMATIONS OBJECT
// ============================================

export const animations = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeIn,
  scaleIn,
  scaleOnHover,
  hoverLift,
  tapScale,
  staggerContainer,
  staggerContainerSlow,
  staggerContainerFast,
  staggerItem,
  counterAnimation,
  pulse,
  bounce,
  slideInBottom,
  pageTransition,
};

// ============================================
// HOOKS
// ============================================

/**
 * Hook for scroll-triggered animations
 * @param options - IntersectionObserver options
 * @returns { ref, isInView } - ref to attach to element and visibility state
 * 
 * @example
 * ```tsx
 * const { ref, isInView } = useScrollAnimation();
 * 
 * <motion.div
 *   ref={ref}
 *   initial="hidden"
 *   animate={isInView ? "visible" : "hidden"}
 *   variants={fadeInUp}
 * >
 *   Content
 * </motion.div>
 * ```
 */
export function useScrollAnimation(options?: {
  once?: boolean;
  margin?: `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`;
  amount?: "some" | "all" | number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? "-100px" as const,
    amount: options?.amount ?? "some",
  });

  return { ref, isInView };
}

/**
 * Hook for scroll animation with custom threshold
 * @param threshold - Visibility threshold (0-1)
 */
export function useScrollAnimationWithThreshold(threshold: number = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  return { ref, isInView };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create custom fadeInUp with custom distance and duration
 */
export function createFadeInUp(distance: number = 30, duration: number = 0.6): Variants {
  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: "easeOut" as EasingFunction,
      },
    },
  };
}

/**
 * Create stagger container with custom timing
 */
export function createStaggerContainer(
  staggerDelay: number = 0.1,
  initialDelay: number = 0.1
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };
}

/**
 * Create delayed animation
 */
export function withDelay<T extends object>(variant: T, delay: number): T {
  return {
    ...variant,
    visible: {
      ...(variant as { visible?: object }).visible,
      transition: {
        ...((variant as { visible?: { transition?: object } }).visible?.transition || {}),
        delay,
      },
    },
  } as T;
}

