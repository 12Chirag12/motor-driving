"use client";

import type { ComponentPropsWithoutRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedSectionProps = ComponentPropsWithoutRef<"section"> & {
  reveal?: "fade" | "rise" | "lift";
  revealDelay?: number;
};

const revealStyles = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  rise: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  lift: {
    hidden: { opacity: 0, scale: 0.985, y: 22 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
} as const;

export default function AnimatedSection({
  children,
  reveal = "rise",
  revealDelay = 0,
  ...props
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const styles = revealStyles[reveal];

  return (
    <section {...props}>
      <motion.div
        initial={reduceMotion ? false : styles.hidden}
        whileInView={styles.visible}
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                delay: revealDelay,
                duration: reveal === "fade" ? 0.7 : 0.78,
                ease: [0.22, 1, 0.36, 1],
              }
        }
      >
        {children}
      </motion.div>
    </section>
  );
}
