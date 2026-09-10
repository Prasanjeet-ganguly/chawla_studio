'use client';

import { useRef } from 'react';
import { Photo } from '@/components/ui/Photo';
import { Reveal } from '@/components/ui/Reveal';
import { describe } from '@/lib/data/captions';

type FullWidthImageBreakProps = {
  photoId?: string;
  headline?: string;
  location?: string;
};

/**
 * 70–100vh Full-Width Cinematic Image Break.
 *
 * Provides a dramatic, breath-taking visual pause in the page flow.
 * Shows high-resolution photography with technical EXIF marginalia,
 * luxury darkroom vignette, and bold editorial statement.
 */
export function FullWidthImageBreak({
  photoId = '0f5a9678',
  headline = 'EVERY FRAME IS A PIECE OF TIME HELD STILL.',
  location = 'PUNJAB & WORLDWIDE',
}: FullWidthImageBreakProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative isolate h-[72vh] min-h-[500px] max-h-[850px] w-full overflow-hidden border-y border-hairline bg-ink"
      aria-label="Editorial visual intermission"
    >
      {/* Background full-bleed image with gentle zoom */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="relative h-full w-full scale-105 transition-transform duration-1000 ease-out">
          <Photo
            id={photoId}
            alt={describe(photoId)}
            aspect="fill"
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Atmospheric Scrims & Vignettes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial-gradient from-transparent via-ink/30 to-ink/80"
      />

      {/* Content Overlay */}
      <div className="shell relative flex h-full flex-col justify-between py-12 md:py-16">
        {/* Top Technical Marginalia */}
        <div className="flex items-center justify-between border-b border-hairline/60 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-[0.68rem] tracking-[0.22em] text-gold uppercase">
              ARCHIVE SELECTS · {location}
            </span>
          </div>

          <span className="font-mono text-[0.65rem] tracking-widest text-paper-dim/80 uppercase hidden sm:block">
            LEICA & SONY CINEMA · 85MM PRIME
          </span>
        </div>

        {/* Center / Bottom Giant Headline */}
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow text-gold/90 mb-3 tracking-[0.25em]">
              DOCUMENTARY WEDDING CINEMA
            </p>
            <h2 className="font-display text-display-m uppercase leading-[0.94] text-ivory sm:text-display-l">
              {headline}
            </h2>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between border-t border-hairline/60 pt-4">
          <span className="font-mono text-[0.65rem] tracking-widest text-paper-dim uppercase">
            CHAWLA STUDIO · SINCE 2014
          </span>
          <span className="font-mono text-[0.65rem] tracking-widest text-gold uppercase">
            FRAME ID: #{photoId.toUpperCase()}
          </span>
        </div>
      </div>
    </section>
  );
}
