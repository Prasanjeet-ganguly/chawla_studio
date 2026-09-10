'use client';

import { useCallback, useEffect, useState } from 'react';
import { BrandStatement } from './BrandStatement';
import { HeroActions } from './HeroActions';
import { HeroBackdrop } from './HeroBackdrop';
import { HeroContent } from './HeroContent';
import { HeroCounter, HERO_SLIDES } from './HeroCounter';
import { HeroStats } from './HeroStats';
import { HeroStrip } from './HeroStrip';
import { ShowreelModal } from './ShowreelModal';
import { WeddingBadge } from './WeddingBadge';
import { useHeroParallax } from '@/lib/hooks/useHeroParallax';
import { isIntroFinished, onIntroFinish } from '@/lib/loading-state';
import { loadingScreen } from '@/lib/site.config';

/**
 * Editorial Hero Section:
 *
 * Full-screen cinematic backdrop, bold uppercase display typography,
 * right-side 01 02 03 04 counter navigation, marginalia stats panel,
 * and 4-column bottom information strip.
 */
export function Hero() {
  const [shown, setShown] = useState(false);
  const [showreel, setShowreel] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { section, backdrop, content } = useHeroParallax();

  const currentSlide = HERO_SLIDES[activeSlideIndex] ?? HERO_SLIDES[0]!;

  const openShowreel = useCallback(() => setShowreel(true), []);
  const closeShowreel = useCallback(() => setShowreel(false), []);

  useEffect(() => {
    if (isIntroFinished()) {
      const id = window.setTimeout(() => setShown(true), 60);
      return () => window.clearTimeout(id);
    }

    const stopListening = onIntroFinish(() => setShown(true));

    const safety = window.setTimeout(
      () => setShown(true),
      loadingScreen.timing.maxVisible + 400
    );

    return () => {
      stopListening();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <>
      <section
        ref={section}
        id="hero"
        aria-labelledby="hero-title"
        className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden"
      >
        <HeroBackdrop photoId={currentSlide.photoId} layer={backdrop} />

        {/* Main Content Area + Right Side Counter */}
        <div
          ref={content}
          className="shell relative flex flex-1 flex-col justify-end pt-[34svh] will-change-transform sm:pt-[38svh] md:pt-[38svh] lg:justify-center lg:pt-28"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <HeroContent shown={shown} />
              <HeroActions shown={shown} onShowreel={openShowreel} />
            </div>

            {/* Editorial 01 02 03 04 Counter */}
            <HeroCounter
              shown={shown}
              activeIndex={activeSlideIndex}
              onSelect={setActiveSlideIndex}
            />
          </div>
        </div>

        {/*
          The marginalia band: figures, wedding crest, and closing statement.
        */}
        <div className="shell relative mt-8 grid grid-cols-1 items-end gap-6 sm:mt-10 sm:grid-cols-2 md:mt-10 md:grid-cols-[1fr_auto] md:gap-x-10 md:gap-y-8 pb-8 md:pb-9">
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:self-end">
            <HeroStats shown={shown} />
          </div>
          <div className="justify-self-center sm:justify-self-start md:justify-self-end">
            <WeddingBadge shown={shown} />
          </div>
          <div className="justify-self-center sm:justify-self-end md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-2">
            <BrandStatement shown={shown} />
          </div>
        </div>

        {showreel ? <ShowreelModal onClose={closeShowreel} /> : null}
      </section>

      {/* Editorial 4-Column Information Strip directly beneath the Hero */}
      <HeroStrip shown={shown} />
    </>
  );
}
