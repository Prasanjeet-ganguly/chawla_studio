import { StudioHeader } from '@/components/photography/Header';
import { StudioHero } from '@/components/photography/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#111111]">
      <StudioHeader />
      <StudioHero />
    </div>
  );
}
