import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustMarquee } from '@/components/sections/TrustMarquee';
import { ProcessStepsGrid } from '@/components/sections/ProcessStepsGrid';
import { ProgramCardDeck } from '@/components/sections/ProgramCardDeck';
import { CoverageMatrix } from '@/components/sections/CoverageMatrix';
import { FaqAccordionSection } from '@/components/sections/FaqAccordionSection';
import { ConversionCTA } from '@/components/sections/ConversionCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustMarquee />
      <ProcessStepsGrid />
      <ProgramCardDeck />
      <CoverageMatrix />
      <FaqAccordionSection />
      <ConversionCTA />
    </div>
  );
}
