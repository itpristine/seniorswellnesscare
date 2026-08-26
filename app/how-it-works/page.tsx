import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ClipboardCheck,
  Stethoscope,
  Package,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'How It Works | 4 Simple Steps to At-Home Genetic Testing',
  description:
    'Learn how our painless 4-step genetic screening process works. From 2-minute eligibility to at-home 5-minute cheek swab and CLIA lab results.',
};

export default function HowItWorksPage() {
  const stepsDetail = [
    {
      num: '01',
      title: 'Check Your Eligibility (Under 2 Minutes)',
      desc: 'Complete our online pre-qualification form. We evaluate your Medicare Part B coverage and medical background to verify $0 out-of-pocket eligibility.',
      icon: <ClipboardCheck className="w-7 h-7 text-[#0D9488]" />,
      details: [
        'No upfront payment or credit card required',
        'Evaluates hereditary cancer and medication risk factors',
        'Instant confirmation of Medicare qualification status',
      ],
    },
    {
      num: '02',
      title: 'State-Licensed Physician Review & Approval',
      desc: 'An independent, board-certified physician licensed in your state reviews your clinical health profile to confirm medical necessity.',
      icon: <Stethoscope className="w-7 h-7 text-amber-600" />,
      details: [
        '100% physician ordered and reviewed',
        'Compliant with CMS federal diagnostic guidelines',
        'No waiting room visits required',
      ],
    },
    {
      num: '03',
      title: 'Painless 5-Minute At-Home Cheek Swab',
      desc: 'Receive your collection kit via USPS Priority Mail. Collect your sample with a gentle cheek swab at home and return it using the prepaid packaging.',
      icon: <Package className="w-7 h-7 text-emerald-600" />,
      details: [
        'Zero needles, zero blood draws, 100% painless',
        'Includes 2 sterile swabs and step-by-step instructions',
        'Prepaid USPS Priority return shipping envelope included',
      ],
    },
    {
      num: '04',
      title: 'CLIA Lab Sequencing & Physician Results Guidance',
      desc: 'Our CLIA/CAP accredited laboratory performs high-complexity Next-Gen Sequencing. Your physician reviews the results and provides actionable medical guidance.',
      icon: <FileSpreadsheet className="w-7 h-7 text-[#0D9488]" />,
      details: [
        '99.9% analytical accuracy benchmark',
        'Comprehensive report shared with you and your personal doctor',
        'Personalized medication and preventive action plan',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            The Patient Journey
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight">
            Four Simple Steps from Home to Clarity
          </h1>
          <p className="font-sans-body text-base sm:text-lg text-slate-600 leading-relaxed">
            We make preventive genetic screening accessible, secure, and completely non-invasive—from online pre-qualification to physician-guided results.
          </p>
        </div>

        {/* Step-by-Step Vertical Cards */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {stepsDetail.map((step, idx) => (
            <Card
              key={step.num}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-clinical flex flex-col md:flex-row items-start gap-8 relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-center justify-center shrink-0 shadow-xs">
                {step.icon}
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-extrabold text-sm text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full">
                    Step {step.num}
                  </span>
                  <h3 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#0D1B2A]">
                    {step.title}
                  </h3>
                </div>

                <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {step.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Unboxing Kit Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border border-[#EAE5D8] text-[#0D1B2A] shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="emerald" size="sm" dot>
              Inside Your Collection Kit
            </Badge>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
              What You Receive in the Mail
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Everything required for a clean, effortless 5-minute collection from your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <span className="text-2xl block">🧪</span>
              <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">2 Sterile Buccal Swabs</h4>
              <p className="text-xs text-slate-500">Soft Dacron swabs designed for gentle cheek cell collection.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <span className="text-2xl block">🛡️</span>
              <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">Safety Transport Tube</h4>
              <p className="text-xs text-slate-500">Preserves DNA stability for room-temperature postal transit.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <span className="text-2xl block">📖</span>
              <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">Illustrated Instructions</h4>
              <p className="text-xs text-slate-500">Large print, easy-to-follow steps designed for seniors.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <span className="text-2xl block">📦</span>
              <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">Prepaid USPS Envelope</h4>
              <p className="text-xs text-slate-500">Pre-addressed 2-way priority packaging with zero postage required.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <Button
            href="/eligibility-checker"
            size="lg"
            variant="primary"
            className="shadow-md shadow-teal-700/20 text-xs sm:text-sm font-semibold rounded-full"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Your Free Pre-Qualification Check &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
}
