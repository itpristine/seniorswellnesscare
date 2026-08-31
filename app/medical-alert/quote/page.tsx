import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MedicalAlertQuoteForm } from '@/components/forms/MedicalAlertQuoteForm';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Phone, ShieldCheck, CheckCircle2, Radio, Lock } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Get a Medical Alert Quote | Seniors Wellness Care',
  description:
    'Request a free, customized Medical Alert quote from Seniors Wellness Care. Compare in-home, mobile GPS, and smartwatch emergency safety systems with no obligation.',
};

export default function MedicalAlertQuotePage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <Badge variant="rose" size="md">
            Fast &amp; Free Quote • No Obligation
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Request Your Medical Alert Quote
          </h1>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            Fill in your details below. A dedicated senior safety specialist will prepare a customized quote and help you choose the ideal system for your home, travel, or everyday routine.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white border border-slate-200/90 shadow-xl rounded-3xl p-6 sm:p-10">
            <MedicalAlertQuoteForm
              heading="Get Your Free Medical Alert Quote"
              subheading="Complete the form below. A safety specialist will contact you with clear, transparent system details and pricing."
            />
          </Card>
        </div>

        {/* Trust Badges Row */}
        <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <Radio className="w-4 h-4 text-rose-600" />,
              text: '24/7 US Emergency Dispatch Center',
            },
            {
              icon: <ShieldCheck className="w-4 h-4 text-[#0D9488]" />,
              text: '100% Shower-Safe Waterproof Buttons',
            },
            {
              icon: <Lock className="w-4 h-4 text-[#0D9488]" />,
              text: '256-Bit Encrypted & 100% Confidential',
            },
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
            <span className="text-slate-600">Prefer to get your quote over the phone?</span>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneFormatted}`}
            className="font-bold text-[#0D1B2A] hover:text-[#0D9488] whitespace-nowrap"
          >
            Call {SITE_CONFIG.phone}
          </a>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link
            href="/medical-alert"
            className="text-xs font-semibold text-[#0D9488] hover:underline"
          >
            &larr; Back to Medical Alert Systems Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
