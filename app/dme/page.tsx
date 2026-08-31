import React from 'react';
import { Metadata } from 'next';
import { DmeHeroSection } from '@/components/sections/dme/DmeHeroSection';
import { DmeTrustMarquee } from '@/components/sections/dme/DmeTrustMarquee';
import { DmeOverviewSection } from '@/components/sections/dme/DmeOverviewSection';
import { DmeProductsSection } from '@/components/sections/dme/DmeProductsSection';
import { DmeMedicareBenefitsSection } from '@/components/sections/dme/DmeMedicareBenefitsSection';
import { DmeProcessSection } from '@/components/sections/dme/DmeProcessSection';
import { DmeFaqSection } from '@/components/sections/dme/DmeFaqSection';
import { DmeConversionCTA } from '@/components/sections/dme/DmeConversionCTA';

export const metadata: Metadata = {
  title: 'Durable Medical Equipment (DME) for Seniors | Medicare Covered Medical Equipment',
  description:
    'Physician-prescribed Durable Medical Equipment (DME) for seniors: Medicare covered orthopedic knee, back LSO, shoulder, wrist, and elbow braces with zero hassle home delivery.',
  keywords: [
    'durable medical equipment',
    'DME for seniors',
    'durable medical equipment for seniors',
    'Medicare DME',
    'Medicare durable medical equipment',
    'DME supplies for seniors',
    'medical equipment for elderly',
    'senior medical equipment',
    'Medicare covered medical equipment',
    'Medicare DME suppliers',
    'durable medical equipment Medicare coverage',
    'medical equipment covered by Medicare',
    'DME for Medicare beneficiaries',
    'Medicare approved DME',
    'home medical equipment for seniors',
    'mobility equipment for seniors',
    'senior mobility aids',
    'home medical equipment',
    'Medicare DME coverage',
  ],
};

export default function DMEPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with Pre-Qualification Card */}
      <DmeHeroSection />

      {/* 2. Trust Credentials Strip */}
      <DmeTrustMarquee />

      {/* 3. What is DME? Comprehensive Clinical Explainer */}
      <DmeOverviewSection />

      {/* 4. DME Products We Provide (5 Dedicated Braces) */}
      <DmeProductsSection />

      {/* 5. Medicare & Patient Benefits + Coverage Comparison Matrix */}
      <DmeMedicareBenefitsSection />

      {/* 6. How It Works (Simple 4-Step Patient Process) */}
      <DmeProcessSection />

      {/* 7. Frequently Asked Questions Accordion */}
      <DmeFaqSection />

      {/* 8. Bottom Conversion Call-to-Action Banner */}
      <DmeConversionCTA />
    </div>
  );
}
