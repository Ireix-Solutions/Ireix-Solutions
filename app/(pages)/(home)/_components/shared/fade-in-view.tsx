"use client";

import { type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  fadeUpVariants,
  useAccessibleVariants,
} from "./animation-config";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** How much of the element must be visible before triggering (0-1) */
  amount?: number;
  /** Direction: "up" | "down" | "left" | "right" | "none" */
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionOffset: Record<string, { x?: number; y?: number }> = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
  none: {},
};

export function FadeInView({
  children,
  className,
  delay = 0,
  amount = 0.2,
  direction = "up",
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });
  const variants = useAccessibleVariants(fadeUpVariants);
  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      style={{
        ...(offset.x !== undefined && !isInView
          ? { transform: `translateX(${offset.x}px)` }
          : {}),
        ...(offset.y !== undefined && !isInView
          ? { transform: `translateY(${offset.y}px)` }
          : {}),
      }}
    >
      {children}
    </motion.div>
  );
}
