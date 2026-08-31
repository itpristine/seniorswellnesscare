import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ClipboardCheck,
  Stethoscope,
  Truck,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Dna,
  HeartPulse,
  Radio,
  Sparkles,
  Phone,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'How It Works | 4 Simple Steps to Senior Healthcare & Diagnostics',
  description:
    'Learn how Seniors Wellness Care delivers seamless senior care: from 2-minute pre-qualification and physician review to free doorstep delivery and 24/7 care monitoring.',
};

export default function HowItWorksPage() {
  const stepsDetail = [
    {
      num: '01',
      title: 'Check Your Benefit Eligibility (Under 2 Minutes)',
      desc: 'Complete our simple online pre-qualification or call our patient concierge. We evaluate your insurance coverage and available benefits across all indicated services.',
      icon: <ClipboardCheck className="w-7 h-7 text-[#0D9488]" />,
      details: [
        'Zero upfront fee, credit card, or financial commitment required',
        'Covers genetic screening, DME medical equipment & alert systems',
        'Transparent review of coverage and benefit criteria',
      ],
    },
    {
      num: '02',
      title: 'State-Licensed Physician Review & Prescription',
      desc: 'An independent, board-certified physician licensed in your state reviews your medical health profile, verifies clinical necessity, and authorizes the required digital orders or prescriptions in full compliance with CMS guidelines.',
      icon: <Stethoscope className="w-7 h-7 text-amber-600" />,
      details: [
        '100% physician-ordered, reviewed, and authorized',
        'Direct coordination with your existing primary care doctor if preferred',
        'No waiting rooms or travel required—handled seamlessly via telehealth',
      ],
    },
    {
      num: '03',
      title: 'Free White-Glove Doorstep Delivery',
      desc: 'Your physician-approved supplies are shipped directly to your home via discrete, expedited delivery with full tracking. All swab kits include prepaid return packaging, while DME and alert systems arrive pre-configured and ready to use.',
      icon: <Truck className="w-7 h-7 text-[#0D9488]" />,
      details: [
        '5-Minute non-invasive DNA cheek swab collection kit',
        'Custom-fitted orthopedic braces & assistive mobility rollators',
        'Pre-activated 24/7 mobile GPS & in-home medical alert devices',
      ],
    },
    {
      num: '04',
      title: 'Ongoing Care Guidance, Lab Sequencing & 24/7 Safety',
      desc: 'Our CLIA/CAP partner laboratories sequence your DNA sample with 99.9% accuracy, and clinical specialists guide you through actionable findings. For DME and medical alert users, our 24/7 monitoring center provides continuous protection.',
      icon: <HeartHandshake className="w-7 h-7 text-rose-500" />,
      details: [
        'Comprehensive physician-reviewed diagnostic reports',
        'Personalized medication safety & preventive health guidance',
        '24/7 live US-based emergency response & caregiver notifications',
      ],
    },
  ];

  const serviceBreakdowns = [
    {
      title: 'Genetic Testing & Diagnostics',
      icon: <Dna className="w-6 h-6 text-[#0D9488]" />,
      badge: 'Coverage Support',
      desc: 'Painless 5-minute buccal swab delivered in prepaid packaging. Processed by CLIA/CAP labs across 9 diagnostic panels.',
      href: '/immunodeficiency',
    },
    {
      title: 'DME Medical Equipment',
      icon: <HeartPulse className="w-6 h-6 text-amber-600" />,
      badge: 'Coverage Support',
      desc: 'Orthopedic braces, joint stabilizers, mobility rollators, and supportive equipment shipped directly to your home.',
      href: '/dme',
    },
    {
      title: '24/7 Medical Alert Systems',
      icon: <Radio className="w-6 h-6 text-rose-500" />,
      badge: '24/7 Care',
      desc: 'Mobile GPS pendants with built-in automatic fall detection and in-home smart hubs. Instant connection to certified dispatchers.',
      href: '/medical-alert',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            The Seniors Wellness Care Journey
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight">
            Four Simple Steps to Comprehensive Senior Care
          </h1>
          <p className="font-sans-body text-base sm:text-lg text-slate-600 leading-relaxed">
            We make preventive diagnostics, coverage-supported medical equipment, and 24/7 emergency response accessible, secure, and coordinated from the comfort of home.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {stepsDetail.map((step) => (
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

        {/* 3 Services Cards */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border border-[#EAE5D8] text-[#0D1B2A] shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="emerald" size="sm" dot>
              Comprehensive Senior Healthcare
            </Badge>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
              Explore How Each Service Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select a service below to learn about specific tests, medical supplies, and safety equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceBreakdowns.map((srv) => (
              <div
                key={srv.title}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shadow-sm">
                      {srv.icon}
                    </div>
                    <Badge variant="teal" size="sm" className="bg-[#ecfdf5] text-[#0D9488] border border-emerald-200/80">
                      {srv.badge}
                    </Badge>
                  </div>
                  <h4 className="font-serif-heading font-bold text-base text-[#0D1B2A]">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
                </div>

                <Link
                  href={srv.href}
                  className="text-xs font-bold text-[#0D9488] hover:text-[#0F766E] flex items-center gap-1 pt-2 border-t border-slate-100"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4 pt-4">
          <div className="max-w-xl mx-auto p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-4">
            <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A]">
              Need Help with Your Care Journey?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Our patient concierge team is available to answer questions, guide you through each step, and help you move forward with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneFormatted}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-[#0D1B2A] bg-[#F7F4E7]/80 shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
