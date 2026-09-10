'use client';

import { Photo } from '@/components/ui/Photo';
import { describe } from '@/lib/data/captions';

type HeroBackdropProps = {
  /** Photograph id from the studio's library. */
  photoId: string;
  /** The layer the parallax loop moves. Carries the zoom, so it can be shifted. */
  layer: React.RefObject<HTMLDivElement | null>;
};

/**
 * The photograph the hero is built on.
 *
 * Full bleed with cinematic lighting, luxury darkroom vignette, and smooth
 * parallax support. Below `lg` it gracefully provides an atmospheric band with
 * multi-stop deep scrim to let typography breathe.
 */
export function HeroBackdrop({ photoId, layer }: HeroBackdropProps) {
  return (
    <div className="absolute inset-x-0 top-0 -z-10 h-[56svh] overflow-hidden sm:h-[50svh] md:h-[48svh] lg:h-full">
      <div
        ref={layer}
        key={photoId}
        className="absolute inset-0 origin-[30%_30%] [--hero-focus:50%_28%] [--hero-zoom:1.12] will-change-transform animate-[fadeIn_0.9s_ease-out] md:origin-[40%_30%] md:[--hero-focus:50%_26%] md:[--hero-zoom:1.06] lg:origin-[9%_12%] lg:[--hero-focus:20%_26%] lg:[--hero-zoom:1.36]"
        style={{ transform: 'translate3d(0, 0, 0) scale(var(--hero-zoom))' }}
      >
        <Photo
          id={photoId}
          alt={describe(photoId)}
          aspect="fill"
          objectPosition="var(--hero-focus)"
          sizes="(min-width: 1024px) 136vw, (min-width: 768px) 106vw, 112vw"
          priority
        />
      </div>

      {/* Phone and portrait tablet: smooth cinematic dissolve into ink background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.4)_0%,rgba(8,8,10,0.15)_18%,rgba(8,8,10,0.36)_42%,rgba(8,8,10,0.72)_65%,rgba(8,8,10,0.94)_84%,var(--color-ink)_98%)] lg:hidden"
      />

      {/* Laptop and up: cinematic left-dark wash to give typography pristine contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(96deg,rgba(8,8,10,0.96)_0%,rgba(8,8,10,0.92)_18%,rgba(8,8,10,0.74)_34%,rgba(8,8,10,0.36)_50%,rgba(8,8,10,0.1)_64%,rgba(8,8,10,0)_78%)] lg:block xl:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(96deg,rgba(8,8,10,0.96)_0%,rgba(8,8,10,0.9)_17%,rgba(8,8,10,0.64)_31%,rgba(8,8,10,0.26)_45%,rgba(8,8,10,0.05)_60%,rgba(8,8,10,0)_74%)] xl:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(to_top,var(--color-ink)_0%,rgba(8,8,10,0.62)_16%,rgba(8,8,10,0)_44%)] lg:block"
      />

      {/* Top scrim for header legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,10,0.76)_0,rgba(8,8,10,0.4)_3rem,rgba(8,8,10,0.16)_7rem,rgba(8,8,10,0)_12rem)]"
      />

      {/* Atmospheric corner vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[radial-gradient(120%_95%_at_58%_34%,rgba(8,8,10,0)_16%,rgba(8,8,10,0.45)_62%,rgba(8,8,10,0.88)_100%)] lg:block"
      />
    </div>
  );
}
