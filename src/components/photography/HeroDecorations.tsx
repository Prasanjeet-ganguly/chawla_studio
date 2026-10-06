'use client';

import { motion } from 'framer-motion';

export function HeroDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Large faint circle — the organic shape behind the image composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute right-[-8%] top-[5%] w-[82%] max-w-[780px] aspect-square rounded-full"
        style={{
          border: '1.5px solid rgba(217, 154, 53, 0.2)',
        }}
      />

      {/* Second, slightly smaller decorative ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="absolute right-[-2%] top-[11%] w-[68%] max-w-[640px] aspect-square rounded-full"
        style={{
          border: '1px solid rgba(217, 154, 53, 0.12)',
        }}
      />

      {/* Camera icon — right side accent */}
      <motion.svg
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.18, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D99A35"
        strokeWidth="1"
        className="absolute right-[8%] top-[18%] w-16 h-16 lg:w-20 lg:h-20 hidden lg:block"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </motion.svg>

      {/* Film strip — bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.07, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="absolute bottom-20 left-4 hidden lg:flex flex-col gap-0.5"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="w-10 h-6 border border-[#111111] rounded-sm flex items-center justify-around px-0.5"
          >
            <div className="w-1 h-1 rounded-full bg-[#111111]" />
            <div className="w-1 h-1 rounded-full bg-[#111111]" />
          </div>
        ))}
      </motion.div>

      {/* Curved connecting line SVG — large, subtle */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.15 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.7 }}
        viewBox="0 0 400 300"
        fill="none"
        className="absolute right-[10%] top-[10%] w-[45%] max-w-[420px] hidden xl:block"
        aria-hidden="true"
      >
        <motion.path
          d="M50 40 C120 20, 200 80, 180 160 C160 240, 280 200, 340 250"
          stroke="#D99A35"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 1 }}
        />
        {/* Small arrow head */}
        <motion.path
          d="M330 242 L340 250 L344 238"
          stroke="#D99A35"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.4 }}
        />
      </motion.svg>

      {/* Soft texture gradient top right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 55% at 82% 45%, rgba(233,180,92,0.09) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
