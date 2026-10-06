import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';
import { cx } from '@/lib/utils';

type WordmarkProps = {
  /** A plain lockup for places that are already inside a link, or are static. */
  as?: 'link' | 'text';
  onClick?: () => void;
  className?: string;
  settled?: boolean;
};

/**
 * The studio's mark: the name set in Cormorant / Great Vibes, the discipline in small
 * tracked capitals beneath it.
 */
export function Wordmark({ as = 'link', onClick, className, settled = false }: WordmarkProps) {
  const lockup = (
    <>
      <div className="flex items-baseline gap-1.5 leading-none">
        <span
          className={cx(
            'font-light tracking-tight transition-colors duration-500 text-[1.45rem] md:text-[1.65rem]',
            settled ? 'text-ivory' : 'text-[#111111]'
          )}
          style={{ fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)' }}
        >
          Chawla
        </span>
        <span
          className="text-[#D99A35] text-[1.65rem] md:text-[1.85rem] leading-none"
          style={{ fontFamily: 'var(--font-great-vibes, "Great Vibes", cursive)' }}
        >
          Studio
        </span>
      </div>
      <span
        className={cx(
          'mt-1 text-[0.48rem] md:text-[0.52rem] leading-none tracking-[0.26em] uppercase transition-colors duration-500',
          settled ? 'text-gold/85' : 'text-[#78716c]'
        )}
        style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
      >
        {siteConfig.discipline}
      </span>
    </>
  );

  const shape = cx('group inline-flex flex-col items-start', className);

  if (as === 'text') {
    return <span className={shape}>{lockup}</span>;
  }

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.brandName}, home`}
      className={cx(shape, 'min-h-11 justify-center')}
    >
      {lockup}
    </Link>
  );
}
