"use client";

import { motion } from "framer-motion";


type AnimateEnterProps = {
  className?: string;
  delay?: number;
  children: React.ReactNode;
  duration?: number;
};

export function AnimateEnter({
  className,
  delay,
  children,
  duration = 0.5,
}: AnimateEnterProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: duration, ease: "easeInOut", delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
