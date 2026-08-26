'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Dna,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border-b border-[#EAE5D8]">
      {/* Soft ambient blurs */}
      <div className="absolute top-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
          {/* Eyebrow Pill */}
          <div className="inline-flex max-w-full items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-[#0D9488] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Medicare Part B Covered • Physician-Ordered Genomic Screening</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D1B2A] leading-[1.15] tracking-tight">
            Unlock Your DNA Blueprint for{' '}
            <span className="highlight-accent text-[#0D9488]">Proactive Health</span>{' '}
            &amp; Disease Prevention.
          </h1>

          {/* Subtitle */}
          <p className="font-sans-body text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl">
            Access comprehensive, physician-ordered genetic testing from the comfort of home. Covered
            100% by Medicare Part B for qualifying individuals—painless 5-minute cheek swab,
            CLIA-certified laboratory processing, and personalized medical guidance.
          </p>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Button
              href="/eligibility-checker"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-7 py-4 rounded-full shadow-lg shadow-teal-700/20"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Check My Eligibility ($0 Cost)
            </Button>

            <Button
              href="/how-it-works"
              size="lg"
              variant="light"
              className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-6 py-4 rounded-full"
            >
              How It Works &rarr;
            </Button>
          </div>

          {/* Trust Checkmarks */}
          <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-medium text-slate-600 border-t border-slate-200/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>CAP &amp; CLIA Certified Labs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>$0 Out-of-Pocket for Seniors</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>At-Home 5-Min Cheek Swab</span>
            </span>
          </div>
        </div>

        {/* Right Column: Clean CTA Card — links to unified form */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                  Check Medicare Coverage
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Takes under 2 minutes • No surprise billing guarantee
                </p>
              </div>
              <Badge variant="emerald" size="sm" dot>
                $0 Part B
              </Badge>
            </div>

            {/* Visual highlights */}
            <div className="space-y-2.5">
              {[
                'First & Last Name, Email, Phone',
                'State of Residence & Date of Birth',
                'Medicare / Medicaid / Other Insurance',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-slate-700 space-y-0.5">
              <div className="flex items-center gap-1.5 font-bold text-[#0D9488]">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>100% Covered Under Medicare Part B</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Zero upfront payment, credit card, or financial commitment required.
              </p>
            </div>

            <Link
              href="/eligibility-checker"
              className="flex items-center justify-center gap-2 w-full bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-200" />
              Start 2-Minute Pre-Qualification &rarr;
            </Link>

            <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#0D9488]" />
                HIPAA 256-Bit Encrypted
              </span>
              <span>100% Confidential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
