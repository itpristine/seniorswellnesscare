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
  title: 'Best Medical Alert Systems for Seniors | 24/7 Fall Detection & GPS Alert',
  description:
    'Protect your safety and independence with Seniors Wellness Care 24/7 medical alert systems for seniors. Features automatic fall detection, GPS mobile pendants, and smartwatch emergency buttons.',
  keywords: [
    'medical alert for seniors',
    'medical alert system for seniors',
    'medical alert devices for seniors',
    'senior medical alert',
    'medical emergency alert for seniors',
    'medical alert system for elderly',
    'emergency alert system for seniors',
    'best medical alert system for seniors',
    'medical alert with fall detection',
    'fall detection for seniors',
    'emergency button for seniors',
    'medical alert button for elderly',
    'senior emergency response system',
    'medical alert wearable for seniors',
    'GPS medical alert for seniors',
    'what happens if a senior falls alone',
    'fall detection for elderly living alone',
    'emergency button for elderly living alone',
    'how to keep elderly parents safe at home',
    'medical alert for seniors living alone',
  ],
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
