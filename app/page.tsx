import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  Dna,
  HeartPulse,
  Radio,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Phone,
  Truck,
  Activity,
  Award,
  Stethoscope,
  Clock,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { UnifiedLeadForm } from '@/components/forms/UnifiedLeadForm';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'senior wellness care | Precision Healthcare, DME Equipment & Medical Alert Systems',
  description:
    'senior wellness care is an all-in-one senior healthcare platform offering Medicare-covered Immunodeficiency DNA screening, Durable Medical Equipment (DME), and 24/7 Medical Alert safety systems.',
};

export default function HomePage() {
  const coreServices = [
    {
      id: 'immunodeficiency',
      title: 'Immunodeficiency & DNA Diagnostics',
      tagline: '100% Medicare Part B Covered ($0 Copay)',
      description:
        'Comprehensive physician-ordered genomic screening across 9 clinical panels including Hereditary Cancer (CGx), Pharmacogenomics (PGx), Primary Immunodeficiency, and Neurocognitive health. Painless 5-minute at-home buccal swab processed in CAP/CLIA accredited labs.',
      href: '/immunodeficiency',
      icon: <Dna className="w-8 h-8 text-[#0D9488]" />,
      badge: '100% Covered ($0)',
      badgeVariant: 'emerald' as const,
      features: [
        '9 Specialized Clinical DNA Panels',
        'Painless 5-Minute At-Home Cheek Swab',
        'Next-Gen DNA Sequencing (NGS) in CLIA Labs',
        'State-Licensed Physician Review & Consult',
      ],
      ctaText: 'Explore Immunodeficiency Testing',
    },
    {
      id: 'dme',
      title: 'Durable Medical Equipment (DME)',
      tagline: 'Medicare Part B Approved Medical Supplies',
      description:
        'Physician-prescribed orthopedic braces (back, knee, shoulder), assistive mobility devices (rollators, wheelchairs), respiratory care (CPAP/BiPAP), and Continuous Glucose Monitors (CGM) delivered directly to your home with full Medicare billing assistance.',
      href: '/dme',
      icon: <HeartPulse className="w-8 h-8 text-amber-600" />,
      badge: 'Medicare Part B',
      badgeVariant: 'amber' as const,
      features: [
        'Orthopedic Bracing (Spinal LSO & Knee Unloaders)',
        'Mobility Aids (Upright Rollators & Wheelchairs)',
        'Continuous Glucose Monitors (CGM Sensors)',
        'Free White-Glove Home Delivery & Fit Support',
      ],
      ctaText: 'Explore DME Medical Equipment',
    },
    {
      id: 'medical-alert',
      title: '24/7 Medical Alert & Safety Systems',
      tagline: 'Instant Senior Safety & Automatic Fall Detection',
      description:
        'Life-saving emergency response devices equipped with automatic fall detection, nationwide 4G LTE GPS tracking, and instant two-way voice communication with certified US emergency dispatchers. No landline telephone required.',
      href: '/medical-alert',
      icon: <Radio className="w-8 h-8 text-rose-500" />,
      badge: '24/7 US Monitoring',
      badgeVariant: 'rose' as const,
      features: [
        'Automatic Built-In Fall Detection Accelerometer',
        'Nationwide 4G LTE Mobile GPS Pendants',
        'In-Home Smart Base Hubs & SOS Wristbands',
        'Instant Family Notification & First Responder Dispatch',
      ],
      ctaText: 'Explore Medical Alert Systems',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border-b border-[#EAE5D8]">
        {/* Soft Ambient Blurs */}
        <div className="absolute top-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex max-w-full items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0D9488] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Medicare-Covered Senior Healthcare, Diagnostics &amp; Safety Platform</span>
            </div>

            <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D1B2A] leading-[1.15] tracking-tight">
              All-in-One Healthcare for Seniors:{' '}
              <span className="highlight-accent text-[#0D9488]">Diagnostics</span>, Medical Supplies &amp; 24/7 Safety.
            </h1>

            <p className="font-sans-body text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl">
              senior wellness care empowers seniors and families with three essential health solutions under one roof: physician-ordered immunodeficiency DNA screening, Medicare-covered durable medical equipment (DME), and 24/7 medical alert fall protection—delivered to your doorstep with $0 or low out-of-pocket costs.
            </p>

            {/* CTA */}
            <div className="pt-2 flex items-center">
              <Button
                href="#services"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal-700/20"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore All 3 Services &rarr;
              </Button>
            </div>

            {/* Trust Checks */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-medium text-slate-600 border-t border-slate-200/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Medicare Part B &amp; Part C Partner</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Physician-Prescribed &amp; Authorized</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>CLIA Labs • Free Home Delivery • 24/7 Response</span>
              </span>
            </div>
          </div>

          {/* Right Hero Column: 3 Pillar Fast Selector Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <Card className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                    senior wellness care Services
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Select a service to get started</p>
                </div>
                <Badge variant="teal" size="sm">
                  3 Pillars
                </Badge>
              </div>

              <div className="space-y-3">
                {/* Option 1: Immunodeficiency */}
                <Link
                  href="/immunodeficiency"
                  className="flex items-start gap-3.5 p-3 rounded-2xl border border-slate-200 hover:border-[#0D9488] hover:bg-teal-50/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0 mt-0.5 text-[#0D9488] group-hover:scale-105 transition-transform">
                    <Dna className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A] group-hover:text-[#0D9488] transition-colors">
                        Immunodeficiency &amp; DNA
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Coverage Review
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      9 Preventive Clinical Panels • 5-Min Cheek Swab
                    </p>
                  </div>
                </Link>

                {/* Option 2: DME */}
                <Link
                  href="/dme"
                  className="flex items-start gap-3.5 p-3 rounded-2xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0 mt-0.5 text-amber-600 group-hover:scale-105 transition-transform">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A] group-hover:text-amber-700 transition-colors">
                        DME Medical Equipment
                      </h4>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                        Medicare Part B
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      Orthopedic Braces, Mobility Rollators &amp; CGMs
                    </p>
                  </div>
                </Link>

                {/* Option 3: Medical Alert */}
                <Link
                  href="/medical-alert"
                  className="flex items-start gap-3.5 p-3 rounded-2xl border border-slate-200 hover:border-rose-500 hover:bg-rose-50/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center shrink-0 mt-0.5 text-rose-600 group-hover:scale-105 transition-transform">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A] group-hover:text-rose-700 transition-colors">
                        24/7 Medical Alert
                      </h4>
                      <span className="text-[10px] font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded-full">
                        24/7 Live
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      Automatic Fall Detection &amp; Mobile GPS Pendants
                    </p>
                  </div>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── 3 PRIMARY SERVICES SHOWCASE ── */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EAE5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="teal" size="md">
              senior wellness care Service Portfolio
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
              Three Essential Healthcare Pillars for Seniors
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-slate-600">
              Each service is fully integrated with licensed physician networks, accredited laboratory sequencing, and Medicare benefit verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((srv) => (
              <Card
                key={srv.id}
                className="p-7 sm:p-8 rounded-3xl bg-[#FDFCF7] border border-slate-200/90 shadow-clinical flex flex-col justify-between hover:shadow-xl hover:bg-white transition-all duration-200"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      {srv.icon}
                    </div>
                    <Badge variant={srv.badgeVariant} size="sm">
                      {srv.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A]">
                      {srv.title}
                    </h3>
                    <span className="text-xs font-bold text-[#0D9488] block mt-0.5">
                      {srv.tagline}
                    </span>
                    <p className="font-sans-body text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                      {srv.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    {srv.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <Button
                    href={srv.href}
                    variant="primary"
                    size="md"
                    className="w-full justify-center text-xs font-semibold rounded-full shadow-xs"
                  >
                    {srv.ctaText} &rarr;
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDICARE & INSURANCE MATRIX ── */}
      <section className="py-16 sm:py-20 bg-[#FDFCF7] border-b border-[#EAE5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="emerald" size="md" dot>
              Medicare Coverage Matrix
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
              Understand Your Medicare &amp; Insurance Benefits
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-slate-600">
              senior wellness care verifies your benefits upfront with zero surprise billing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-4 sm:p-5">Service Category</th>
                  <th className="p-4 sm:p-5 bg-teal-50/50 text-[#0D9488]">
                    Medicare Part B (Original)
                  </th>
                  <th className="p-4 sm:p-5">Medicare Advantage (Part C)</th>
                  <th className="p-4 sm:p-5">Supplemental / Medigap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#0D1B2A]">
                    <div className="flex items-center gap-2">
                      <Dna className="w-4 h-4 text-[#0D9488]" />
                      <span>Immunodeficiency &amp; DNA Diagnostics</span>
                    </div>
                    <span className="text-xs text-slate-500 font-normal block mt-0.5">
                      9 CLIA diagnostic panels (CGx, PGx, Neuro, Cardio)
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#0D9488] bg-teal-50/30">
                    100% Covered ($0 Out-of-Pocket)
                  </td>
                  <td className="p-4 sm:p-5 text-slate-700">
                    Covered benefit with pre-authorization
                  </td>
                  <td className="p-4 sm:p-5 text-slate-700">
                    Covers any secondary coinsurance if applicable
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#0D1B2A]">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-amber-600" />
                      <span>DME (Durable Medical Equipment)</span>
                    </div>
                    <span className="text-xs text-slate-500 font-normal block mt-0.5">
                      Bracing, mobility rollators, respiratory, CGMs
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#0D9488] bg-teal-50/30">
                    80% Covered by Medicare Part B
                  </td>
                  <td className="p-4 sm:p-5 text-slate-700">
                    Plan in-network co-pay apply
                  </td>
                  <td className="p-4 sm:p-5 text-slate-700 font-semibold text-emerald-700">
                    Picks up remaining 20% ($0 Total Cost)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#0D1B2A]">
                    <div className="flex items-center gap-2">
                      <Radio className="w-4 h-4 text-rose-500" />
                      <span>24/7 Medical Alert Systems</span>
                    </div>
                    <span className="text-xs text-slate-500 font-normal block mt-0.5">
                      GPS emergency mobile pendants &amp; fall detection
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#0D9488] bg-teal-50/30">
                    HSA/FSA Eligible + Advantage Reimbursement
                  </td>
                  <td className="p-4 sm:p-5 text-slate-700">
                    Many Part C plans include safety device allowance
                  </td>
                  <td className="p-4 sm:p-5 text-slate-700">
                    Direct discounts &amp; monthly subsidies
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4-STEP HEALTHCARE JOURNEY & CARE MODEL ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EAE5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="teal" size="md">
              Simple 4-Step Care Journey
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
              How We Delivers Seamless Senior Care
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-slate-600">
              From benefit verification to doorstep delivery and ongoing monitoring, our clinical team manages every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Quick Benefit Check',
                desc: 'Answer a few quick questions online or over the phone to verify your Medicare Part B and secondary insurance coverage with $0 out-of-pocket obligation.',
                icon: <ShieldCheck className="w-6 h-6 text-[#0D9488]" />,
              },
              {
                step: '02',
                title: 'Physician Review',
                desc: 'A licensed healthcare provider in your state reviews your medical necessity and writes the digital prescription for testing, DME, or safety equipment.',
                icon: <Stethoscope className="w-6 h-6 text-amber-600" />,
              },
              {
                step: '03',
                title: 'Doorstep Delivery',
                desc: 'Your painless DNA cheek swab, custom orthopedic brace, mobility aid, or pre-activated medical alert device is shipped free via discrete USPS Priority Mail.',
                icon: <Truck className="w-6 h-6 text-[#0D9488]" />,
              },
              {
                step: '04',
                title: 'Care & Monitoring',
                desc: 'Receive comprehensive CLIA diagnostic reports, personal fitting guidance, and 24/7 round-the-clock emergency safety monitoring for total peace of mind.',
                icon: <Activity className="w-6 h-6 text-rose-500" />,
              },
            ].map((card) => (
              <Card
                key={card.step}
                className="p-7 rounded-3xl bg-[#FDFCF7] border border-slate-200/90 shadow-clinical hover:shadow-xl hover:bg-white transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      {card.icon}
                    </div>
                    <span className="font-mono font-bold text-2xl text-slate-300">
                      {card.step}
                    </span>
                  </div>

                  <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                    {card.title}
                  </h3>

                  <p className="font-sans-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#0D9488]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Coordinated for You</span>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* ── BOTTOM CONVERSION CTA ── */}
      <section className="py-16 sm:py-20 bg-[#0D1B2A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="emerald" size="md" dot>
            Proactive Senior Healthcare
          </Badge>

          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight max-w-3xl mx-auto">
            Ready to Experience Comprehensive Senior Care &amp; Safety?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of seniors, caregivers, and primary care physicians across the United States who trust senior wellness care for precision diagnostics, medical equipment, and 24/7 emergency response.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="#services"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal-700/30"
            >
              Explore Core Services &rarr;
            </Button>

            <a
              href={`tel:${SITE_CONFIG.phoneFormatted}`}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-6 py-4 rounded-full border border-slate-700 hover:border-slate-500 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Toll-Free: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
