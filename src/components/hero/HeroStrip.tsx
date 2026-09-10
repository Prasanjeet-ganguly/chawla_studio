'use client';

import Link from 'next/link';
import { cx } from '@/lib/utils';
import { RISE, STAGE, after, risen } from './stage';

export type StripItem = {
  number: string;
  category: string;
  tagline: string;
  href: string;
  cta: string;
};

const STRIP_ITEMS: readonly StripItem[] = [
  {
    number: '01',
    category: 'WEDDINGS',
    tagline: 'Sacred rituals, heartfelt vows & timeless celebrations.',
    href: '/#work',
    cta: 'View Gallery',
  },
  {
    number: '02',
    category: 'PRE-WEDDING',
    tagline: 'Intimate editorial portraits framed in natural light.',
    href: '/#work',
    cta: 'Explore Frames',
  },
  {
    number: '03',
    category: 'CINEMA & FILMS',
    tagline: '4K documentary films with authentic sound & emotion.',
    href: '/#work',
    cta: 'Watch Films',
  },
  {
    number: '04',
    category: 'THE STUDIO',
    tagline: 'Over 10+ years & 1,000+ weddings documented worldwide.',
    href: '/#about',
    cta: 'Our Philosophy',
  },
] as const;

type HeroStripProps = {
  shown?: boolean;
};

/**
 * Editorial Information Strip (4 Columns).
 *
 * Sits at the threshold of the hero, framing the four core disciplines
 * of Chawla Studio with 1px hairline dividers and magazine-style micro-typography.
 */
export function HeroStrip({ shown = true }: HeroStripProps) {
  return (
    <div
      className={cx(
        'w-full border-y border-hairline/80 bg-ink/70 backdrop-blur-md',
        RISE,
        risen(shown)
      )}
      style={after(STAGE.stats + 80)}
    >
      <div className="shell !px-0">
        <div className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {STRIP_ITEMS.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group relative flex flex-col justify-between p-6 md:p-8 transition-colors duration-500 hover:bg-gold/[0.03]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs tracking-widest text-gold">
                    {item.number}
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-paper-dim uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-gold">
                    {item.cta} &#8594;
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg tracking-[0.12em] text-ivory uppercase md:text-xl transition-colors duration-300 group-hover:text-gold">
                  {item.category}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-paper-dim/80 line-clamp-2">
                  {item.tagline}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-6 bg-hairline transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
