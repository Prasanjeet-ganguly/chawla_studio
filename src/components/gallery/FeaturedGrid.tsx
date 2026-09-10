'use client';

import Link from 'next/link';
import { Photo } from '@/components/ui/Photo';
import { Reveal } from '@/components/ui/Reveal';
import { describe } from '@/lib/data/captions';
import { projects } from '@/lib/data/projects';
import { frameNumber } from '@/lib/utils';

/**
 * Editorial 4-Column Featured Work Grid.
 *
 * Displays the 4 curated photography series in a high-fashion,
 * magazine-style 4-column layout with bold titles, frame counts,
 * and delicate 1px hairline rules.
 */
export function FeaturedGrid() {
  // Grab the 4 signature photography projects
  const featuredProjects = projects
    .filter((p) => p.type === 'photography')
    .slice(0, 4);

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-title"
      className="rebate-grid py-20 sm:py-24 md:py-32 border-b border-hairline"
    >
      <p className="rebate-mark self-start pt-2">Featured Series</p>

      <div className="shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="eyebrow text-gold">Curated Portfolio</span>
              <span aria-hidden="true" className="gold-rule w-12 shrink-0" />
            </div>
            <h2
              id="featured-title"
              className="mt-4 font-display text-display-m uppercase text-ivory sm:text-display-l"
            >
              Featured
              <br />
              Stories
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-paper-dim sm:text-base">
              Each series is an unscripted documentary — preserving the genuine
              laughter, sacred rituals, and delicate atmosphere of the celebration.
            </p>
            <Link
              href="/#work"
              className="link-underline mt-4 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold uppercase"
            >
              View Full Archive ({projects.length} Series) &#8594;
            </Link>
          </div>
        </Reveal>

        {/* 4-Column Magazine Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {featuredProjects.map((project, index) => {
            return (
              <Reveal
                key={project.slug}
                delay={index * 0.08}
                className="group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-gold">
                      {frameNumber(index)}
                    </span>
                    <span className="font-mono text-[0.65rem] tracking-wider text-paper-dim uppercase">
                      {project.categoryName}
                    </span>
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="block overflow-hidden border border-hairline/60 transition-all duration-500 group-hover:border-gold-line"
                  >
                    <div className="overflow-hidden">
                      <Photo
                        id={project.coverId}
                        alt={describe(project.coverId)}
                        aspect={4 / 5}
                        sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                        zoom
                      />
                    </div>
                  </Link>

                  <div className="mt-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl uppercase tracking-wider text-ivory transition-colors duration-300 group-hover:text-gold">
                        <Link href={`/work/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <span className="font-mono text-[0.68rem] text-paper-dim/70">
                        {project.frameCount} frames
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-paper-dim/80 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline/40 flex items-center justify-between">
                  <Link
                    href={`/work/${project.slug}`}
                    className="font-mono text-[0.7rem] tracking-widest text-paper-dim group-hover:text-gold transition-colors duration-300 uppercase"
                  >
                    Explore Story &#8594;
                  </Link>
                  <span className="font-mono text-[0.65rem] text-paper-dim/50">
                    {project.month ?? (project.year ? `${project.year}` : 'Curated')}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
