'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

interface FloatingPhotoProps {
  src: string;
  alt: string;
  label: string;
  rotation: number;
  className?: string;
  animationProps?: {
    initial: Record<string, number | string>;
    animate: Record<string, number | string>;
    transition?: Record<string, number | string | string[]>;
  };
  floatDelay?: number;
}

export function FloatingPhoto({
  src,
  alt,
  label,
  rotation,
  className = '',
  animationProps,
  floatDelay = 0,
}: FloatingPhotoProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={animationProps?.initial ?? { opacity: 0, y: 20 }}
      animate={animationProps?.animate ?? { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: floatDelay }}
      className={`absolute will-change-transform ${className}`}
      style={{ rotate: rotation }}
      whileHover={{
        scale: 1.07,
        rotate: 0,
        zIndex: 20,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Gentle float animation — only when not reduced motion */}
      <motion.div
        animate={
          reduced
            ? {}
            : {
                y: [0, -8, 0, 6, 0],
                rotate: [0, 1.5, 0, -1, 0],
              }
        }
        transition={{
          duration: 5 + floatDelay * 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: floatDelay,
        }}
      >
        {/* Polaroid card */}
        <div className="bg-white p-2.5 pb-8 shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_45px_rgba(0,0,0,0.28)] transition-shadow duration-300">
          <div className="relative overflow-hidden w-full h-full">
            <Image
              src={src}
              alt={alt}
              width={140}
              height={110}
              className="object-cover w-full h-full"
              sizes="160px"
            />
          </div>
        </div>
        {/* Handwritten label below Polaroid */}
        <div className="mt-2.5 text-center">
          <span
            className="text-[#66615B] text-base"
            style={{ fontFamily: 'var(--font-great-vibes, cursive)' }}
          >
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
