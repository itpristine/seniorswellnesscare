import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustMarquee } from '@/components/sections/TrustMarquee';
import { ProcessStepsGrid } from '@/components/sections/ProcessStepsGrid';
import { ProgramCardDeck } from '@/components/sections/ProgramCardDeck';
import { FaqAccordionSection } from '@/components/sections/FaqAccordionSection';
import { ConversionCTA } from '@/components/sections/ConversionCTA';

export const metadata: Metadata = {
  title: 'Genetic Testing & Preventive Diagnostics | Insurance Coverage Support',
  description:
    'Physician-ordered Genetic Testing across 9 clinical diagnostic panels with insurance and Medicare coverage support. Painless at-home 5-minute buccal cheek swab processed in CLIA/CAP-certified labs.',
};

export default function ImmunodeficiencyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustMarquee />
      <ProcessStepsGrid />
      <ProgramCardDeck />
      <FaqAccordionSection />
      <ConversionCTA />
    </div>
  );
}
