'use client';

import { cx } from '@/lib/utils';
import { RISE, STAGE, after, risen } from './stage';

export type HeroSlide = {
  id: string;
  photoId: string;
  number: string;
  title: string;
  subtitle: string;
};

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    id: 'celebrations',
    photoId: '0f5a6488',
    number: '01',
    title: 'CELEBRATIONS',
    subtitle: 'Night of Celebration',
  },
  {
    id: 'sacred-vows',
    photoId: '0f5a9678',
    number: '02',
    title: 'SACRED VOWS',
    subtitle: 'Two Souls & Rituals',
  },
  {
    id: 'the-beginning',
    photoId: '0f5a4587',
    number: '03',
    title: 'THE BEGINNING',
    subtitle: 'Ring Ceremony',
  },
  {
    id: 'portraits',
    photoId: '0f5a6329',
    number: '04',
    title: 'PORTRAITS',
    subtitle: 'Solitary Grace',
  },
] as const;

type HeroCounterProps = {
  shown: boolean;
  activeIndex: number;
  onSelect: (index: number) => void;
};

/**
 * Editorial Right-Side Hero Counter (01 02 03 04).
 *
 * Inspired by luxury magazine spreads: vertical column with hairline track,
 * numbered markers, active gold indicator rule, and caption tags.
 */
export function HeroCounter({ shown, activeIndex, onSelect }: HeroCounterProps) {
  return (
    <div
      className={cx(
        'hidden lg:flex flex-col items-end gap-6 z-20 select-none',
        RISE,
        risen(shown)
      )}
      style={after(STAGE.stats)}
      role="tablist"
      aria-label="Featured mood series"
    >
      <div className="flex flex-col items-end gap-5">
        <p className="eyebrow text-gold tracking-[0.2em] text-[0.65rem] mb-1">
          FEATURED SERIES
        </p>

        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`View series ${slide.number}: ${slide.title}`}
              onClick={() => onSelect(index)}
              className={cx(
                'group flex items-center gap-4 text-right transition-all duration-500 ease-[var(--ease-out-expo)]',
                isActive ? 'opacity-100' : 'opacity-40 hover:opacity-85'
              )}
            >
              <div className="flex flex-col items-end">
                <span
                  className={cx(
                    'font-mono text-xs tracking-[0.18em] transition-colors duration-300',
                    isActive ? 'text-gold' : 'text-paper-dim group-hover:text-paper'
                  )}
                >
                  {slide.title}
                </span>
                <span className="text-[0.65rem] text-paper-dim/60 font-mono tracking-wider">
                  {slide.subtitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={cx(
                    'h-px transition-all duration-500',
                    isActive
                      ? 'w-8 bg-gold'
                      : 'w-3 bg-hairline-strong group-hover:w-5 group-hover:bg-gold/60'
                  )}
                />
                <span
                  className={cx(
                    'font-display text-sm md:text-base font-normal tracking-widest transition-colors duration-300',
                    isActive ? 'text-ivory font-medium' : 'text-paper-dim group-hover:text-paper'
                  )}
                >
                  {slide.number}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Vertical subtle indicator track */}
      <div className="h-16 w-px bg-gradient-to-b from-gold/60 via-gold-line to-transparent mr-2" />
    </div>
  );
}
