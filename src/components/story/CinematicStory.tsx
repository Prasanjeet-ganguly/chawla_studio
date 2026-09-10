'use client';

import Link from 'next/link';
import { Photo } from '@/components/ui/Photo';
import { Reveal } from '@/components/ui/Reveal';
import { describe } from '@/lib/data/captions';

const LEAD_PHOTO = '0f5a6503';
const DETAIL_PHOTO = '0f5a4584';

/**
 * Editorial Storytelling / Narrative Feature Section.
 *
 * "Stories That Feel Timeless" — blends oversized serif typography,
 * deep editorial philosophy, layered imagery, and luxury gold accents.
 */
export function CinematicStory() {
  return (
    <section
      id="cinematic-story"
      aria-labelledby="story-title"
      className="rebate-grid py-24 sm:py-28 md:py-36 border-b border-hairline relative isolate overflow-hidden"
    >
      <p className="rebate-mark self-start pt-2">Our Philosophy</p>

      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="eyebrow text-gold">The Art of Observation</span>
                <span aria-hidden="true" className="gold-rule w-14 shrink-0" />
              </div>

              <h2
                id="story-title"
                className="mt-5 font-display text-display-m uppercase leading-[0.95] text-ivory sm:text-display-l"
              >
                Stories That
                <br />
                Feel Timeless
              </h2>
            </Reveal>

            <Reveal delay={0.08} className="mt-8 flex flex-col gap-6 text-paper-dim">
              <p className="text-base sm:text-lg leading-relaxed text-ivory/90 font-light">
                We believe that the most powerful memories cannot be posed. They
                unfold in the unguarded half-second between scripted moments — the
                quiet exhale before walking down the aisle, a shared glance across
                a crowded room, an elder’s gentle hand.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-paper-dim">
                Our approach blends cinematic documentary with high-fashion editorial
                restraint. We work with available light and authentic emotion so that
                when you look back on these frames decades from now, you don’t just
                remember how the day looked — you remember exactly how it felt.
              </p>
            </Reveal>

            <Reveal delay={0.14} className="mt-10 pt-8 border-t border-hairline/60">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div>
                  <span className="font-display text-2xl sm:text-3xl text-gold">10+</span>
                  <p className="mt-1 font-mono text-[0.65rem] tracking-wider text-paper-dim uppercase">
                    Years of Craft
                  </p>
                </div>
                <div>
                  <span className="font-display text-2xl sm:text-3xl text-gold">1000+</span>
                  <p className="mt-1 font-mono text-[0.65rem] tracking-wider text-paper-dim uppercase">
                    Weddings Framed
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-display text-2xl sm:text-3xl text-gold">4K Cinema</span>
                  <p className="mt-1 font-mono text-[0.65rem] tracking-wider text-paper-dim uppercase">
                    Master Color Grade
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 border border-gold-line bg-gold/5 px-6 py-3.5 text-xs font-mono tracking-widest text-gold uppercase transition-all duration-300 hover:border-gold hover:bg-gold/15"
                >
                  Commission Your Story &#8594;
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Layered Photography Frame Composition */}
          <div className="lg:col-span-6 relative">
            <Reveal variant="clip" delay={0.1} className="relative z-10">
              <div className="border border-hairline p-2 sm:p-3 bg-ink-raise">
                <Photo
                  id={LEAD_PHOTO}
                  alt={describe(LEAD_PHOTO)}
                  aspect={4 / 5}
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  zoom
                />
              </div>
            </Reveal>

            {/* Overlapping secondary detail frame */}
            <Reveal
              variant="clip"
              delay={0.2}
              className="hidden sm:block absolute -bottom-10 -left-10 z-20 w-1/2 border border-gold-line/70 p-2 bg-ink-high shadow-2xl"
            >
              <Photo
                id={DETAIL_PHOTO}
                alt={describe(DETAIL_PHOTO)}
                aspect={1}
                sizes="(min-width: 1024px) 20vw, 40vw"
                zoom
              />
              <p className="mt-2 text-[0.62rem] font-mono tracking-widest text-gold uppercase px-1">
                Sacred Details · 85mm
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
