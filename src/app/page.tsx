import { AboutSection } from '@/components/about/AboutSection';
import { PhilosophySection } from '@/components/about/PhilosophySection';
import { ContactSection } from '@/components/contact/ContactSection';
import { WhatsAppButton } from '@/components/contact/WhatsAppButton';
import { FeaturedGrid } from '@/components/gallery/FeaturedGrid';
import { WorkSection } from '@/components/gallery/WorkSection';
import { StudioHero } from '@/components/photography/Hero';
import { ServicesSection } from '@/components/services/ServicesSection';
import { CinematicStory } from '@/components/story/CinematicStory';
import { FullWidthImageBreak } from '@/components/story/FullWidthImageBreak';

/**
 * The luxury editorial home page, read as one continuous cinematic experience:
 *
 * 1. StudioHero (New luxury editorial hero with floating Polaroids & stats)
 * 2. Featured Stories (4-column curated magazine project grid)
 * 3. Stories That Feel Timeless (Storytelling narrative & layered frames)
 * 4. Full-Width Image Break (70-100vh full bleed atmospheric pause)
 * 5. Philosophy (Drifting tenets & edge-to-edge contact strip)
 * 6. Selected Work (Category-filtered photography archive & video films)
 * 7. Services (Documentary offerings index)
 * 8. About The Studio (Craft, vision & select prints)
 * 9. Contact (Enquiry commission form & direct studio channels)
 */
export default function HomePage() {
  return (
    <>
      <StudioHero />
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
