import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustMarquee } from '@/components/sections/TrustMarquee';
import { ProcessStepsGrid } from '@/components/sections/ProcessStepsGrid';
import { ProgramCardDeck } from '@/components/sections/ProgramCardDeck';
import { FaqAccordionSection } from '@/components/sections/FaqAccordionSection';
import { ConversionCTA } from '@/components/sections/ConversionCTA';

export const metadata: Metadata = {
  title: 'Genetic Testing for Seniors | Medicare Covered Genetic Screening',
  description:
    'Physician-ordered genetic testing for seniors and Medicare patients across 9 clinical diagnostic panels (CGx, PGx, Cardiovascular). 100% at-home cheek swab in CLIA/CAP labs.',
  keywords: [
    'genetic testing for seniors',
    'genetic testing for Medicare patients',
    'Medicare genetic testing',
    'genetic testing for older adults',
    'genetic health testing for seniors',
    'genetic screening for seniors',
    'genetic testing services for seniors',
    'genetic testing covered by Medicare',
    'Medicare covered genetic testing',
    'genetic testing for hereditary conditions',
    'hereditary cancer genetic testing',
    'cardiovascular genetic testing',
    'pharmacogenetic testing',
    'genetic testing for medication response',
    'genetic testing for inherited diseases',
    'genetic risk assessment for seniors',
    'genetic testing for heart disease',
    'genetic testing for cancer risk',
    'hereditary cancer testing',
    'neurological genetic testing',
    'pharmacogenomic testing for seniors',
  ],
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
