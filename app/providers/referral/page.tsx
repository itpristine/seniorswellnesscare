import React from 'react';
import { Metadata } from 'next';
import { UnifiedLeadForm } from '@/components/forms/UnifiedLeadForm';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Stethoscope, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Patient Referral & Order Requisition | Provider Portal',
  description:
    'Licensed healthcare providers can submit patient orders for CLIA/CAP laboratory genomic screening covered under Medicare Part B.',
};

export default function ProviderReferralPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="teal" size="md">
            Clinical Ordering Portal
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Digital Patient Requisition &amp; Referral Form
          </h1>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Licensed healthcare providers can submit patient orders directly for CLIA/CAP laboratory
            genomic screening covered under Medicare Part B.
          </p>
        </div>

        {/* Unified Form Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
            {/* Provider note */}
            <div className="flex items-start gap-3 mb-6 p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80">
              <Stethoscope className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong className="text-[#0D1B2A]">For Healthcare Providers:</strong> Enter your
                patient&apos;s details below. Our clinical intake team will verify insurance
                eligibility and coordinate kit dispatch within 24 hours of submission.
              </p>
            </div>

            <UnifiedLeadForm
              heading="Submit Patient Order"
              subheading="Enter patient information below. All fields marked * are required. Our team will verify eligibility and arrange kit delivery."
            />
          </Card>
        </div>

        {/* Phone help */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#0D9488] shrink-0" />
            <span className="text-slate-600">Need to submit orders by phone?</span>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneFormatted}`}
            className="font-bold text-[#0D1B2A] hover:text-[#0D9488] whitespace-nowrap"
          >
            Call {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
