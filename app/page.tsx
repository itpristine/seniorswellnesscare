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
  title: 'Seniors Wellness Care | Medicare Genetic Testing, DME & Medical Alert Systems USA',
  description:
    'Seniors Wellness Care connects seniors and families with physician-ordered Genetic Testing, insurance-covered Durable Medical Equipment (DME), and independent 24/7 Medical Alert safety systems across the USA.',
};

export default function HomePage() {
  const coreServices = [
    {
      id: 'immunodeficiency',
      title: 'Genetic Testing & Molecular Diagnostics',
      tagline: 'Physician-Ordered Clinical Genomic Screening',
      description:
        'Comprehensive physician-ordered genomic screening across 9 clinical panels including Hereditary Cancer (CGx), Pharmacogenomics (PGx), Primary Immunodeficiency, and Neurocognitive health. Painless 5-minute at-home buccal swab processed in CAP/CLIA accredited labs.',
      href: '/immunodeficiency',
      icon: <Dna className="w-8 h-8 text-[#0D9488]" />,
      badge: '9 Clinical Panels',
      badgeVariant: 'emerald' as const,
      features: [
        '9 Specialized Clinical DNA Panels',
        'Painless 5-Minute At-Home Cheek Swab',
        'Next-Gen DNA Sequencing (NGS) in CLIA Labs',
        'State-Licensed Physician Review & Consult',
      ],
      ctaText: 'Explore Genetic Testing',
    },
    {
      id: 'dme',
      title: 'Durable Medical Equipment (DME)',
      tagline: 'Physician-Prescribed Medical Equipment',
      description:
        'Physician-prescribed orthopedic braces (back, knee, shoulder, wrist, elbow), assistive mobility devices, and supportive equipment delivered directly to your home with insurance benefit review and coordination.',
      href: '/dme',
      icon: <HeartPulse className="w-8 h-8 text-amber-600" />,
      badge: 'Physician Prescribed',
      badgeVariant: 'amber' as const,
      features: [
        'Orthopedic Bracing (Spinal LSO & Knee Unloaders)',
        'Joint Stabilizers (Shoulder, Wrist & Elbow)',
        'Assisted Mobility Guidance & Direct Delivery',
        'Free White-Glove Home Delivery & Fit Support',
      ],
      ctaText: 'Explore DME Medical Equipment',
    },
    {
      id: 'medical-alert',
      title: '24/7 Medical Alert & Safety Systems',
      tagline: 'Senior Safety & Automatic Fall Detection',
      description:
        'Life-saving emergency response devices equipped with automatic fall detection, nationwide 4G LTE GPS tracking, and instant two-way voice communication with certified US emergency dispatchers. No landline telephone required.',
      href: '/medical-alert',
      icon: <Radio className="w-8 h-8 text-rose-500" />,
      badge: '24/7 US Response',
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
              <span>Expert Healthcare, Diagnostics &amp; Safety Services</span>
            </div>

            <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D1B2A] leading-[1.15] tracking-tight">
              All-in-One Healthcare:{' '}
              <span className="highlight-accent text-[#0D9488]">Genetic Testing</span>, Medical Supplies &amp; 24/7 Safety.
            </h1>

            <p className="font-sans-body text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Seniors Wellness Care helps seniors and families support better health, mobility, and independence with physician-ordered Genetic Testing, physician-prescribed DME such as orthopedic braces and mobility supports, and 24/7 Medical Alert systems with fall detection, GPS, and emergency response. Insurance benefit reviews are available for qualifying Genetic Testing and DME.
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
                <span>Medicare &amp; Commercial Insurance Support</span>
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
            <Card className="w-full max-w-md bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xl space-y-4">
              <div className="border-b border-slate-100 pb-3.5 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-serif-heading font-bold text-base sm:text-lg text-[#0D1B2A] leading-snug">
                    Senior Wellness Services
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Select a core service to get started
                  </p>
                </div>
                <Badge variant="teal" size="sm" className="shrink-0 whitespace-nowrap">
                  3 Pillars
                </Badge>
              </div>

              <div className="space-y-3">
                {/* Option 1: Genetic Testing */}
                <Link
                  href="/immunodeficiency"
                  className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 hover:border-[#0D9488] hover:bg-teal-50/30 transition-all group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0 mt-0.5 text-[#0D9488] group-hover:scale-105 transition-transform">
                    <Dna className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 mb-0.5">
                      <h4 className="font-serif-heading font-bold text-xs sm:text-sm text-[#0D1B2A] group-hover:text-[#0D9488] transition-colors leading-tight">
                        Genetic Testing
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                        9 Clinical Panels
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                      9 Clinical DNA Panels • 5-Min Cheek Swab
                    </p>
                  </div>
                </Link>

                {/* Option 2: DME */}
                <Link
                  href="/dme"
                  className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 hover:border-amber-500 hover:bg-amber-50/30 transition-all group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0 mt-0.5 text-amber-600 group-hover:scale-105 transition-transform">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 mb-0.5">
                      <h4 className="font-serif-heading font-bold text-xs sm:text-sm text-[#0D1B2A] group-hover:text-amber-700 transition-colors leading-tight">
                        DME Medical Equipment
                      </h4>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                        Physician Prescribed
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                      Orthopedic Braces &amp; Doorstep Delivery
                    </p>
                  </div>
                </Link>

                {/* Option 3: Medical Alert */}
                <Link
                  href="/medical-alert"
                  className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 hover:border-rose-500 hover:bg-rose-50/30 transition-all group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center shrink-0 mt-0.5 text-rose-600 group-hover:scale-105 transition-transform">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 mb-0.5">
                      <h4 className="font-serif-heading font-bold text-xs sm:text-sm text-[#0D1B2A] group-hover:text-rose-700 transition-colors leading-tight">
                        24/7 Medical Alert
                      </h4>
                      <span className="text-[10px] font-bold text-rose-800 bg-rose-50 border border-rose-200/60 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                        24/7 Live
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                      Automatic Fall Detection &amp; Mobile GPS
                    </p>
                  </div>
                </Link>
              </div>

              {/* Bottom HIPAA Trust Indicator */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#0D9488] shrink-0" />
                  HIPAA 256-Bit Encrypted
                </span>
                <span>100% Confidential</span>
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
              Seniors Wellness Care Service Portfolio
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
              Three Essential Healthcare Pillars for Seniors
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-slate-600">
              Each service is fully integrated with licensed physician networks, accredited laboratory sequencing, and insurance benefit verification.
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

      {/* ── 4-STEP HEALTHCARE JOURNEY & CARE MODEL ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EAE5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="teal" size="md">
              Simple 4-Step Care Journey
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
              How We Deliver Seamless Care
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
                desc: 'Answer a few quick questions online or over the phone to verify your Medicare, Medicare Advantage, or commercial insurance coverage options with zero obligation.',
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
                desc: 'Your painless DNA cheek swab, custom orthopedic brace, mobility aid, or pre-activated medical alert device is shipped promptly via discrete USPS Priority Mail.',
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
                  <span>Coordinated Care Support</span>
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
            Comprehensive Senior Healthcare
          </Badge>

          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight max-w-3xl mx-auto">
            Ready to Experience Comprehensive Healthcare &amp; Safety?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of seniors, caregivers, and primary care physicians across the United States who trust Seniors Wellness Care for precision genetic testing, medical equipment, and 24/7 emergency response.
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
