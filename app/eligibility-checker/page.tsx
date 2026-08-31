import React from 'react';
import { Metadata } from 'next';
import { UnifiedLeadForm } from '@/components/forms/UnifiedLeadForm';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Check Eligibility for Genetic Testing & DME | Seniors Wellness Care',
  description:
    'Complete our 2-minute pre-qualification form to verify Medicare and insurance coverage for physician-ordered Genetic Testing and Durable Medical Equipment (DME).',
};

export default function EligibilityCheckerPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const sourceParam = typeof searchParams?.source === 'string' ? searchParams.source.toLowerCase() : '';
  const programParam = typeof searchParams?.program === 'string' ? searchParams.program.toLowerCase() : '';
  const isDmeFlow = sourceParam === 'dme' || programParam === 'dme' || programParam === 'durable-medical-equipment';

  const formHeading = isDmeFlow
    ? 'Check Your DME Eligibility'
    : 'Check Your Genetic Testing Eligibility';

  const formSubheading = isDmeFlow
    ? 'Complete the form below. A licensed physician will review your profile and help assess whether insurance coverage may support appropriate DME eligibility and coverage review.'
    : 'Complete the form below. A licensed physician will review your profile and help assess whether insurance coverage may support appropriate testing.';

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <Badge variant="emerald" size="md" dot>
            Insurance &amp; Medicare Pre-Qualification
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            {formHeading}
          </h1>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            {isDmeFlow
              ? 'Fill in your details below. A licensed physician in your state will review your profile and determine whether insurance coverage may support appropriate durable medical equipment.'
              : 'Fill in your details below. A licensed physician in your state will review your profile and help determine whether insurance coverage may be available for appropriate genomic testing.'}
          </p>
        </div>

        {/* Unified Form Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white border border-slate-200/90 shadow-xl rounded-3xl p-6 sm:p-10">
            <UnifiedLeadForm
              heading={formHeading}
              subheading={formSubheading}
              formType={isDmeFlow ? 'dme' : 'genetic_testing'}
            />
          </Card>
        </div>

        {/* Trust Badges Row */}
        <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <ShieldCheck className="w-4 h-4 text-[#0D9488]" />, text: 'CAP & CLIA Accredited Labs' },
            { icon: <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />, text: 'Insurance Coverage Review' },
            { icon: <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />, text: 'Physician-Reviewed Every Order' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-medium text-slate-700"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Phone Help Banner */}
        <div className="max-w-xl mx-auto mt-8 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#0D9488] shrink-0" />
            <span className="text-slate-600">Prefer to check eligibility over the phone?</span>
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
