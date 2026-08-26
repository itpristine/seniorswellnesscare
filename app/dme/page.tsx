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
  title: 'Durable Medical Equipment (DME) & Orthopedic Braces | Medicare Part B Covered',
  description:
    'Physician-prescribed orthopedic braces for back, knee, shoulder, wrist, and elbow. Covered 80% to 100% by Medicare Part B with physician review and free doorstep delivery.',
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
