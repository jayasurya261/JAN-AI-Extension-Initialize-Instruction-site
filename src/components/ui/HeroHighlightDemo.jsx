"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto ">
      JAN AI is a privacy focused AI assistant designed to enhance your coding experience directly within VS Code. Unlike cloud-based AI tools, JAN AI runs entirely on your laptop, {" "}<br></br>
        <Highlight className="text-black dark:text-white">
          ensuring speed, security, and offline accessibility.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
