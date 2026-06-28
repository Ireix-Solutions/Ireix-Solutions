"use client";

import { type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  staggerContainerVariants,
  staggerItemVariants,
  useAccessibleVariants,
} from "./animation-config";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay between children in seconds */
  staggerDelay?: number;
  /** How much of the container must be visible before triggering (0-1) */
  amount?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  amount = 0.15,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });
  const accessibleContainer = useAccessibleVariants(staggerContainerVariants);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={accessibleContainer}
      transition={{
        delayChildren: staggerDelay,
        staggerChildren: staggerDelay,
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  const accessibleItem = useAccessibleVariants(staggerItemVariants);

  return (
    <motion.div className={className} variants={accessibleItem}>
      {children}
    </motion.div>
  );
}
