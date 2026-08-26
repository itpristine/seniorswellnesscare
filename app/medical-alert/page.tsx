import React from 'react';
import { Metadata } from 'next';
import { MedicalAlertHeroSection } from '@/components/sections/medical-alert/MedicalAlertHeroSection';
import { MedicalAlertTrustMarquee } from '@/components/sections/medical-alert/MedicalAlertTrustMarquee';
import { MedicalAlertOverviewSection } from '@/components/sections/medical-alert/MedicalAlertOverviewSection';
import { MedicalAlertSystemsSection } from '@/components/sections/medical-alert/MedicalAlertSystemsSection';
import { MedicalAlertProcessSection } from '@/components/sections/medical-alert/MedicalAlertProcessSection';
import { MedicalAlertFaqSection } from '@/components/sections/medical-alert/MedicalAlertFaqSection';
import { MedicalAlertConversionCTA } from '@/components/sections/medical-alert/MedicalAlertConversionCTA';

export const metadata: Metadata = {
  title: '24/7 Medical Alert Systems | Home, Mobile GPS & Smartwatch Solutions',
  description:
    'Instant 24/7 emergency response, automatic fall detection options, and nationwide GPS mobile pendants. Protect your independence and get a free quote today.',
};

export default function MedicalAlertPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with Safety Consultation Card */}
      <MedicalAlertHeroSection />

      {/* 2. Trust Credentials Strip */}
      <MedicalAlertTrustMarquee />

      {/* 3. What is Medical Alert? Comprehensive Patient-Friendly Explainer */}
      <MedicalAlertOverviewSection />

      {/* 4. Medical Alert Systems We Provide (Home, Mobile, Smartwatch) */}
      <MedicalAlertSystemsSection />

      {/* 5. How It Works (Simple 4-Step Process) */}
      <MedicalAlertProcessSection />

      {/* 6. Frequently Asked Questions Accordion */}
      <MedicalAlertFaqSection />

      {/* 7. Bottom Conversion Call-to-Action Banner */}
      <MedicalAlertConversionCTA />
    </div>
  );
}
