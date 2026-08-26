import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  FileSpreadsheet,
  ArrowRight,
  Phone,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CoverageMatrix } from '@/components/sections/CoverageMatrix';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Medicare Part B Genetic Testing Coverage & $0 Cost Guide',
  description:
    'Learn how Medicare Part B covers physician-ordered preventive genetic testing at $0 out-of-pocket for qualifying beneficiaries. No hidden fees or surprise bills.',
};

export default function MedicareEligibilityPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border border-[#EAE5D8] text-[#0D1B2A] shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-5 relative z-10">
            <Badge variant="emerald" size="md" dot>
              Official Medicare Part B Benefit Guidelines
            </Badge>

            <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight leading-tight">
              Understanding Your Medicare Preventive Genetic Benefits
            </h1>

            <p className="font-sans-body text-sm sm:text-base text-slate-700 leading-relaxed">
              Under federal CMS guidelines, traditional Medicare Part B covers 100% of allowable costs for physician-ordered genetic testing when medical necessity is established—meaning <strong className="text-[#0D9488]">$0 out-of-pocket copay or deductible</strong> for qualifying seniors.
            </p>

            <div className="pt-2">
              <Button
                href="/eligibility-checker"
                size="lg"
                variant="primary"
                className="shadow-md shadow-teal-700/20 text-xs sm:text-sm font-semibold rounded-full"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Verify Your Medicare Eligibility in 2 Minutes &rarr;
              </Button>
            </div>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0D9488] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              1. Zero Out-of-Pocket Cost
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When criteria are met, testing is billed directly to Medicare Part B. You will never receive a bill for covered services.
            </p>
          </Card>

          <Card className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              2. Physician Ordered &amp; Reviewed
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              CMS mandates that all diagnostic genetic tests must be ordered by a licensed physician who confirms personal or family medical necessity.
            </p>
          </Card>

          <Card className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              3. No-Surprise-Billing Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If your Medicare plan or medical profile does not qualify, no swab kit is sent and zero charges are ever billed to you.
            </p>
          </Card>
        </div>

        {/* Coverage Comparison Table */}
        <CoverageMatrix />

        {/* CMS Guidelines Detail Card */}
        <Card className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <Badge variant="teal" size="sm">
              Clinical Necessity Criteria
            </Badge>
            <h3 className="font-serif-heading font-bold text-2xl text-[#0D1B2A]">
              When Does Medicare Part B Deem Testing Medically Appropriate?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-bold text-[#0D1B2A] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                Hereditary Cancer Screening (CGx)
              </h4>
              <p className="text-slate-600 pl-6">
                Covered when an individual has a personal history of cancer or a significant multi-generational family history of breast, ovarian, colorectal, or prostate cancer meeting NCCN guideline thresholds.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#0D1B2A] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                Pharmacogenomics (PGx)
              </h4>
              <p className="text-slate-600 pl-6">
                Covered for seniors taking multiple daily medications (polypharmacy), starting critical therapies (such as blood thinners or cardiac drugs), or experiencing adverse medication side effects.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
