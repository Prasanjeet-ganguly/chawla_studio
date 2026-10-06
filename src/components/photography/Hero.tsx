'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';
import { FloatingPhoto } from './FloatingPhoto';
import { HeroStats } from './HeroStats';
import { HeroDecorations } from './HeroDecorations';
import { studioAssets } from './studioData';

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_OUT },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.93 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: EASE_OUT, delay: 0.3 },
  },
};

const SHOWREEL_URL = 'https://www.youtube.com/embed/1etOrEXAWkA?autoplay=1&rel=0';

// ─── Floating Photos Config ───────────────────────────────────────────────────

const floatingPhotos = [
  {
    key: 'wedding',
    ...studioAssets.floatingPhotos.wedding,
    rotation: -8,
    className: 'top-[-4%] right-[34%] w-[130px] md:w-[160px]',
    delay: 0.6,
    initial: { opacity: 0, y: -30, x: -10 },
    animate: { opacity: 1, y: 0, x: 0 },
  },
  {
    key: 'newborn',
    ...studioAssets.floatingPhotos.newborn,
    rotation: 7,
    className: 'top-[2%] right-[6%] w-[120px] md:w-[150px]',
    delay: 0.75,
    initial: { opacity: 0, y: -20, x: 20 },
    animate: { opacity: 1, y: 0, x: 0 },
  },
  {
    key: 'maternity',
    ...studioAssets.floatingPhotos.maternity,
    rotation: -5,
    className: 'bottom-[20%] right-[52%] w-[110px] md:w-[140px]',
    delay: 0.85,
    initial: { opacity: 0, y: 30, x: -10 },
    animate: { opacity: 1, y: 0, x: 0 },
  },
  {
    key: 'preWedding',
    ...studioAssets.floatingPhotos.preWedding,
    rotation: 9,
    className: 'bottom-[10%] right-[4%] w-[125px] md:w-[155px]',
    delay: 0.95,
    initial: { opacity: 0, y: 30, x: 30 },
    animate: { opacity: 1, y: 0, x: 0 },
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function StudioHero() {
  const [showReel, setShowReel] = useState(false);

  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col overflow-hidden"
        style={{
          background: '#FAF8F4',
          paddingTop: '6rem', // clear the fixed header
        }}
        aria-label="Hero section"
      >
        {/* Decorative Elements (rings, film strip, curved line) */}
        <HeroDecorations />

        {/* ── Main two-column layout ─────────────────────────────────────────── */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-0 max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-16 py-8 lg:py-12">

          {/* ── LEFT: Editorial Text ───────────────────────────────────────── */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start justify-center order-2 lg:order-1 pt-6 lg:pt-0"
          >
            {/* Eyebrow */}
            <motion.div
              variants={textItem}
              className="flex items-center gap-3 mb-7"
            >
              <div
                className="text-xs tracking-[0.22em] text-[#66615B] font-medium"
                style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
              >
                Capturing stories, forever
              </div>
              <div className="flex-1 h-px bg-[#D99A35] w-10 opacity-70" />
            </motion.div>

            {/* Main Headline */}
            <motion.div
              variants={textItem}
              className="mb-6"
            >
              <h1
                className="font-light text-[#111111] leading-[1.05] tracking-tight"
                style={{
                  fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                  fontSize: 'clamp(3.4rem, 7.5vw, 6rem)',
                }}
              >
                <span className="block">Moments</span>
                <span className="block">That Last</span>
              </h1>

              {/* Script "A Lifetime" — the single expressive element */}
              <div className="relative mt-[-0.15em]">
                <span
                  className="block text-[#D99A35] leading-none"
                  style={{
                    fontFamily: 'var(--font-great-vibes, "Great Vibes", cursive)',
                    fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                    letterSpacing: '-0.01em',
                  }}
                  aria-hidden="false"
                >
                  A Lifetime
                </span>
              </div>
            </motion.div>

            {/* Supporting body text */}
            <motion.p
              variants={textItem}
              className="text-[#66615B] leading-relaxed mb-10 max-w-md"
              style={{
                fontFamily: 'var(--font-dm-sans, sans-serif)',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              }}
            >
              We turn your special moments into timeless memories — with
              creativity, passion, and the perfect frame.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={textItem}
              className="flex flex-wrap gap-4 items-center"
            >
              {/* Primary CTA */}
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full bg-[#D99A35] hover:bg-[#E9B45C] text-[#111111] font-semibold text-sm tracking-wide shadow-[0_4px_20px_rgba(217,154,53,0.30)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(217,154,53,0.38)] hover:scale-[1.02]"
                style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
              >
                <span>Explore Portfolio</span>
                <div className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              {/* Secondary: Watch Showreel */}
              <button
                type="button"
                onClick={() => setShowReel(true)}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#D2C9BC] hover:border-[#D99A35] text-[#111111] hover:text-[#D99A35] font-medium text-sm tracking-wide bg-white/60 hover:bg-white/90 transition-all duration-300"
                style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
              >
                <div className="w-7 h-7 rounded-full bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#D99A35] transition-colors duration-300">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Showreel</span>
              </button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Circular Image Composition ─────────────────────────── */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[340px] md:min-h-[480px] lg:min-h-[600px]">
            {/* Main Photographer Image — circular crop */}
            <motion.div
              variants={imageReveal}
              initial="hidden"
              animate="show"
              className="relative z-10"
            >
              {/* Gold outer ring */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: 'clamp(260px, 38vw, 520px)',
                  height: 'clamp(260px, 38vw, 520px)',
                  boxShadow: `
                    0 0 0 2px rgba(217,154,53,0.4),
                    0 0 0 14px rgba(250,248,244,1),
                    0 0 0 16px rgba(217,154,53,0.2),
                    0 28px 70px rgba(0,0,0,0.18)
                  `,
                }}
              >
                <Image
                  src={studioAssets.heroPhotographer}
                  alt="Chawla Studio photographer capturing a wedding moment in golden hour light"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 60vw, 80vw"
                />
                {/* Soft inner vignette */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.18) 100%)',
                  }}
                />
              </div>
            </motion.div>

            {/* ── Floating Polaroid Photos ─────────────────────────────────── */}
            {floatingPhotos.map((photo) => (
              <FloatingPhoto
                key={photo.key}
                src={photo.src}
                alt={photo.alt}
                label={photo.label}
                rotation={photo.rotation}
                className={photo.className}
                animationProps={{
                  initial: photo.initial,
                  animate: photo.animate,
                }}
                floatDelay={photo.delay}
              />
            ))}
          </div>
        </div>

        {/* ── Stats Bar ──────────────────────────────────────────────────────── */}
        <div className="relative z-10 mt-auto pb-6 pt-4">
          <HeroStats />
        </div>
      </section>

      {/* ── Showreel Modal ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(8,8,10,0.95)', backdropFilter: 'blur(8px)' }}
            onClick={() => setShowReel(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={SHOWREEL_URL}
                title="Chawla Studio Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
            <button
              type="button"
              onClick={() => setShowReel(false)}
              aria-label="Close showreel"
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
