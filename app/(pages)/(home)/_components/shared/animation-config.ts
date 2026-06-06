"use client";

import {
  type Variants,
  type Transition,
  useReducedMotion,
} from "framer-motion";

/**
 * Shared animation configuration for the Ireix Solution homepage.
 * All animations respect `prefers-reduced-motion: reduce`.
 */

export const DEFAULT_TRANSITION: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
};

export const STAGGER_TRANSITION: Transition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
  delayChildren: 0.1,
  staggerChildren: 0.08,
};

export const SPRING_TRANSITION: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 12,
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: DEFAULT_TRANSITION,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: STAGGER_TRANSITION,
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: DEFAULT_TRANSITION,
  },
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: DEFAULT_TRANSITION,
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: DEFAULT_TRANSITION,
  },
};

export const heroStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};

export const heroChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
};

/**
 * Hook that returns animation variants respecting reduced motion.
 * When reduced motion is preferred, returns variants with instant transitions.
 */
export function useAccessibleVariants(
  variants: Variants,
): Variants {
  const shouldReduceMotion = useReducedMotion();

  if (!shouldReduceMotion) return variants;

  const accessible: Variants = {};
  for (const key of Object.keys(variants)) {
    const v = variants[key];
    if (typeof v === "object" && v !== null) {
      accessible[key] = {
        ...v,
        transition: { duration: 0 },
      };
    } else {
      accessible[key] = v;
    }
  }
  return accessible;
}
