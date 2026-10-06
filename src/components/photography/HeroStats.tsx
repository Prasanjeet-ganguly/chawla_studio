'use client';

import { motion } from 'framer-motion';
import { Camera, Users, ImageIcon, Trophy } from 'lucide-react';
import { studioStats } from './studioData';

const iconMap = {
  camera: Camera,
  users: Users,
  image: ImageIcon,
  trophy: Trophy,
};

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export function HeroStats() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-[calc(100%-3rem)] mx-auto md:w-auto md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 rounded-2xl md:rounded-full overflow-hidden"
      style={{
        background: 'rgba(24, 23, 21, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
        {studioStats.map((stat) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={stat.label}
              variants={item}
              className="flex flex-col items-center justify-center gap-2 px-8 py-5 md:py-4"
            >
              <div className="text-[#D99A35]">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <p
                  className="text-white font-bold text-xl tracking-tight leading-none"
                  style={{ fontFamily: 'var(--font-cormorant, serif)' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-white/50 text-[11px] tracking-wider mt-1 uppercase"
                  style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
