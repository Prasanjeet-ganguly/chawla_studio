'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

export function StudioHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F4]/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">

        {/* Brand Logo / Wordmark */}
        <Link href="/studio" className="group flex flex-col items-start leading-none no-underline">
          <div className="flex items-baseline gap-1.5">
            <span
              className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]"
              style={{ fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)' }}
            >
              Chawla
            </span>
            <span
              className="text-2xl md:text-3xl text-[#D99A35] font-normal"
              style={{ fontFamily: 'var(--font-great-vibes, "Great Vibes", cursive)' }}
            >
              Studio
            </span>
          </div>
          <span
            className="text-[9px] tracking-[0.35em] text-[#66615B] uppercase font-medium mt-0.5"
            style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
          >
            Photography
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
          style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative text-sm tracking-wide transition-colors duration-200 py-1 ${
                item.active
                  ? 'text-[#111111] font-semibold'
                  : 'text-[#66615B] hover:text-[#111111] font-medium'
              }`}
            >
              {item.label}
              {item.active && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D99A35] rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#D99A35] hover:bg-[#E9B45C] text-[#111111] font-semibold text-sm tracking-wide shadow-[0_4px_16px_rgba(217,154,53,0.25)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(217,154,53,0.35)] hover:scale-[1.02]"
            style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
          >
            <span>Book a Shoot</span>
            <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-[#111111] hover:text-[#D99A35] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A35]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-[#EDE6DA] bg-[#FAF8F4]/98 px-6 py-6 overflow-hidden"
          >
            <div
              className="flex flex-col gap-4"
              style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 transition-colors flex items-center justify-between ${
                    item.active ? 'text-[#D99A35] font-semibold' : 'text-[#111111] hover:text-[#D99A35]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.active && <div className="w-2 h-2 rounded-full bg-[#D99A35]" />}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#EDE6DA]">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-[#D99A35] text-[#111111] font-semibold text-sm shadow-md"
                >
                  <span>Book a Shoot</span>
                  <div className="w-7 h-7 rounded-full bg-[#111111] text-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
