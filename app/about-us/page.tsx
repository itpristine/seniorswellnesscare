import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  HeartPulse,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Radio,
  Dna,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'About Seniors Wellness Care | Senior Healthcare Services & Mission',
  description:
    'Learn about Seniors Wellness Care—our mission to provide proactive senior healthcare services through physician-ordered preventive genomics, Medicare-covered DME, and 24/7 medical alert systems across the USA.',
};

export default function AboutUsPage() {
  const platformPillars = [
    {
      title: 'Precision Genomics & Genetic Testing',
      icon: <Dna className="w-6 h-6 text-[#0D9488]" />,
      badge: 'CLIA & CAP Accredited',
      desc: 'Partnering with certified high-complexity laboratory networks and genetic specialists to deliver accurate, non-invasive biomarker sequencing covered through insurance and Medicare benefits.',
    },
    {
      title: 'Durable Medical Equipment (DME)',
      icon: <HeartPulse className="w-6 h-6 text-amber-600" />,
      badge: 'Physician-Prescribed',
      desc: 'Working directly with licensed orthotists, mobility manufacturers, and insurance and Medicare billing coordinators to deliver essential assistive supplies straight to seniors’ homes.',
    },
    {
      title: '24/7 Senior Emergency Response',
      icon: <Radio className="w-6 h-6 text-rose-500" />,
      badge: '24/7 US Monitoring',
      desc: 'Deploying certified emergency response dispatchers and state-of-the-art automatic fall detection technology to maintain independent, protected living.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border border-[#EAE5D8] text-[#0D1B2A] shadow-xl space-y-5">
          <Badge variant="teal" size="md">
            Our Mission &amp; Purpose
          </Badge>

          <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight leading-tight max-w-3xl">
            Empowering Seniors with Integrated Healthcare Solutions
          </h1>

          <p className="font-sans-body text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
            We believe comprehensive healthcare should be accessible, proactive, and coordinated from home. By integrating physician-ordered preventive diagnostics, Medicare-covered medical equipment, and 24/7 emergency safety response, Seniors Wellness Care provides complete peace of mind for seniors and their families nationwide.
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical text-center space-y-1">
            <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A]">
              12,500+
            </span>
            <p className="text-xs text-slate-500 font-semibold">Seniors Supported</p>
          </Card>

          <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical text-center space-y-1">
            <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D9488]">
              190+
            </span>
            <p className="text-xs text-slate-500 font-semibold">CLIA Partner Labs &amp; Suppliers</p>
          </Card>

          <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical text-center space-y-1">
            <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-amber-600">
              48 States
            </span>
            <p className="text-xs text-slate-500 font-semibold">Physician Network</p>
          </Card>

          <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical text-center space-y-1">
            <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-emerald-600">
              $0.00
            </span>
            <p className="text-xs text-slate-500 font-semibold">Medicare Part B Copay Tier</p>
          </Card>
        </div>

        {/* Replaced Clinical Governance Section -> Integrated Healthcare Model */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="teal" size="sm">
              Integrated Senior Care
            </Badge>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
              Our Three Standards of Clinical Excellence
            </h2>
            <p className="text-sm text-slate-600">
              Every service on the Seniors Wellness Care platform is supported by licensed clinical oversight, accredited laboratory processing, and certified emergency protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {platformPillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <Badge variant="teal" size="sm">
                      {pillar.badge}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0D9488]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Medicare Coordinated Care</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Replaced form button with navigation and contact */}
        <div className="text-center space-y-4 pt-4">
          <div className="max-w-xl mx-auto p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-4">
            <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A]">
              Connect With Our Care Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Have questions about our physician network, laboratory accreditation, or Medicare coverage? Our team is here to assist.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto shadow-md text-xs sm:text-sm font-semibold rounded-full"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Contact Patient Concierge &rarr;
              </Button>
              <a
                href={`tel:${SITE_CONFIG.phoneFormatted}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-[#0D1B2A]"
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
