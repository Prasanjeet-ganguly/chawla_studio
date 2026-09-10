import { Hero } from '@/components/hero/Hero';
import { PhilosophySection } from '@/components/about/PhilosophySection';
import { FeaturedGrid } from '@/components/gallery/FeaturedGrid';
import { CinematicStory } from '@/components/story/CinematicStory';
import { FullWidthImageBreak } from '@/components/story/FullWidthImageBreak';
import { WorkSection } from '@/components/gallery/WorkSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { AboutSection } from '@/components/about/AboutSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { WhatsAppButton } from '@/components/contact/WhatsAppButton';

/**
 * The luxury editorial home page, read as one continuous cinematic experience:
 *
 * 1. Hero (Cinematic backdrop, bold uppercase title, 01-04 counter)
 * 2. Hero Strip (4-column discipline & information bar)
 * 3. Featured Stories (4-column curated magazine project grid)
 * 4. Stories That Feel Timeless (Storytelling narrative & layered frames)
 * 5. Full-Width Image Break (70-100vh full bleed atmospheric pause)
 * 6. Philosophy (Drifting tenets & edge-to-edge contact strip)
 * 7. Selected Work (Category-filtered photography archive & video films)
 * 8. Services (Documentary offerings index)
 * 9. About The Studio (Craft, vision & select prints)
 * 10. Contact (Enquiry commission form & direct studio channels)
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedGrid />
      <CinematicStory />
      <FullWidthImageBreak />
      <PhilosophySection />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <WhatsAppButton />
    </>
  );
}
