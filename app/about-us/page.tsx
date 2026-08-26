import React from 'react';
import { Metadata } from 'next';
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
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'About Aegis Genomics | Mission, Medical Advisory & Laboratory Network',
  description:
    'Learn about Aegis Genomics—our mission to democratize preventive medicine, our board-certified medical advisory leadership, and our national CLIA/CAP laboratory network.',
};

export default function AboutUsPage() {
  const leadership = [
    {
      name: 'Dr. Arthur Vance, MD, PhD, FACMG',
      title: 'Chief Medical Officer & Board-Certified Clinical Geneticist',
      bio: 'Over 22 years leading clinical genomics initiatives and preventive screening programs at top-tier academic medical centers.',
    },
    {
      name: 'Dr. Evelyn Chen, PharmD, BCPS',
      title: 'Director of Pharmacogenomics & Clinical Pharmacology',
      bio: 'Specialist in CPIC guidelines, drug-gene interactions, and reducing adverse drug hospitalizations in geriatric populations.',
    },
    {
      name: 'Marcus Reynolds, MS, CGC',
      title: 'Head of Clinical Genetic Counseling',
      bio: 'Licensed Genetic Counselor passionate about translating complex genomic variant science into actionable lifestyle plans for families.',
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
            Democratizing Preventive Genomics for Every American
          </h1>

          <p className="font-sans-body text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
            We believe that early genomic insights should not be restricted to specialized research hospitals. By connecting patients with licensed physicians, CLIA-certified labs, and Medicare Part B coverage, we make preventive precision medicine accessible nationwide.
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical text-center space-y-1">
            <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A]">
              12,500+
            </span>
            <p className="text-xs text-slate-500 font-semibold">Patients Screened</p>
          </Card>

          <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical text-center space-y-1">
            <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D9488]">
              190+
            </span>
            <p className="text-xs text-slate-500 font-semibold">CLIA Partner Labs</p>
          </Card>

          <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical text-center space-y-1">
            <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-amber-600">
              48 States
            </span>
            <p className="text-xs text-slate-500 font-semibold">Physician Coverage</p>
          </Card>

          <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical text-center space-y-1">
            <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-emerald-600">
              $0.00
            </span>
            <p className="text-xs text-slate-500 font-semibold">Medicare Part B Copay</p>
          </Card>
        </div>

        {/* Medical Advisory Leadership */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="teal" size="sm">
              Clinical Leadership
            </Badge>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
              Medical Advisory &amp; Clinical Governance
            </h2>
            <p className="text-sm text-slate-600">
              Our clinical protocol is governed by leading board-certified physicians, clinical geneticists, and pharmacogenomic specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {leadership.map((leader) => (
              <Card
                key={leader.name}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] font-bold text-lg font-serif-heading">
                    {leader.name.charAt(3)}
                  </div>
                  <div>
                    <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                      {leader.name}
                    </h3>
                    <h4 className="text-xs font-semibold text-[#0D9488] mt-0.5">
                      {leader.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Licensed Medical Governance</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            href="/eligibility-checker"
            size="lg"
            variant="primary"
            className="shadow-md shadow-teal-700/20 font-semibold rounded-full"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Check Your Eligibility in Under 2 Minutes &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
}
