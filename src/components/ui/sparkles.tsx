"use client";
import React, { useId, useMemo } from "react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    // Simulate particles loading
    setTimeout(() => {
      setInit(true);
    }, 100);
  }, []);
  
  const controls = useAnimation();

  useEffect(() => {
    if (init) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  }, [init, controls]);

  const generatedId = useId();
  
  // Create our own particle system since we don't have tsparticles
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={controls} 
      className={`opacity-0 ${className || ''}`}
    >
      <div id={id || generatedId} className="h-full w-full relative overflow-hidden">
        {init && Array.from({ length: particleDensity || 100 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1)}px`,
              height: `${Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1)}px`,
              backgroundColor: particleColor || '#FFFFFF',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [Math.random() * 0.5 + 0.5, 0, Math.random() * 0.5 + 0.5],
              scale: [Math.random() * 0.5 + 0.5, Math.random() * 1 + 1, Math.random() * 0.5 + 0.5],
              x: Math.random() > 0.5 ? [0, Math.random() * 50 - 25] : [0, Math.random() * -50 + 25],
              y: Math.random() > 0.5 ? [0, Math.random() * 50 - 25] : [0, Math.random() * -50 + 25],
            }}
            transition={{
              duration: (speed || 4) * (Math.random() * 2 + 0.5),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}; 