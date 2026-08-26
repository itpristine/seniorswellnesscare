import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustMarquee } from '@/components/sections/TrustMarquee';
import { ProcessStepsGrid } from '@/components/sections/ProcessStepsGrid';
import { ProgramCardDeck } from '@/components/sections/ProgramCardDeck';
import { CoverageMatrix } from '@/components/sections/CoverageMatrix';
import { FaqAccordionSection } from '@/components/sections/FaqAccordionSection';
import { ConversionCTA } from '@/components/sections/ConversionCTA';

export const metadata: Metadata = {
  title: 'Immunodeficiency & Preventive Genomics Testing | Medicare Part B ($0 Cost)',
  description:
    'Physician-ordered preventive genetic testing and 9 diagnostic panels covered 100% by Medicare Part B. Painless at-home 5-minute buccal cheek swab processed in CLIA/CAP-certified labs.',
};

export default function ImmunodeficiencyPage() {
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
