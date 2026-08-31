import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { DIAGNOSTIC_PROGRAMS } from '@/lib/constants/programsData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Dna,
  FileSpreadsheet,
  AlertTriangle,
  Stethoscope,
  ChevronRight,
  Lock,
} from 'lucide-react';

interface ProgramPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return DIAGNOSTIC_PROGRAMS.map((program) => ({
    slug: program.slug,
  }));
}

export function generateMetadata({ params }: ProgramPageProps): Metadata {
  const program = DIAGNOSTIC_PROGRAMS.find((p) => p.slug === params.slug);
  if (!program) return { title: 'Program Not Found' };

  return {
    title: `${program.name} | Physician-Ordered Genetic Screening`,
    description: program.shortDescription,
  };
}

export default function ProgramDetailPage({ params }: ProgramPageProps) {
  const program = DIAGNOSTIC_PROGRAMS.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0D9488]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/programs" className="hover:text-[#0D9488]">Clinical Programs</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0D1B2A] font-bold">{program.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border border-[#EAE5D8] text-[#0D1B2A] shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="emerald" size="sm" dot>
                  {program.heroBadge}
                </Badge>
                <span className="text-xs font-mono font-bold text-[#0D9488]">
                  {program.clinicalCode}
                </span>
              </div>

              <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight leading-tight">
                {program.name}
              </h1>

              <p className="font-sans-body text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
                {program.fullOverview}
              </p>

              {/* Key Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                {program.keyStats.map((stat) => (
                  <div key={stat.label} className="space-y-0.5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      {stat.label}
                    </span>
                    <span className="font-serif-heading font-bold text-base sm:text-lg text-[#0D1B2A]">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4">
              <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center mx-auto shadow-xs">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                    Check If You Qualify
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Takes under 2 minutes • Quick Pre-Qualification
                  </p>
                </div>

                <Button
                  href={`/eligibility-checker?program=${program.slug}`}
                  size="lg"
                  variant="primary"
                  className="w-full justify-center text-xs sm:text-sm font-semibold rounded-full shadow-md"
                >
                  Check Eligibility &rarr;
                </Button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                  <Lock className="w-3 h-3 text-[#0D9488]" />
                  <span>HIPAA 256-Bit Encrypted</span>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Section 1: Clinical Indications ("Who Should Get Tested?") */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif-heading font-bold text-2xl text-[#0D1B2A]">
              Who Should Consider This Screening?
            </h2>
            <p className="text-sm text-slate-600">
              Healthcare providers recommend this diagnostic panel for individuals with the following personal or family health indicators:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {program.clinicalIndications.map((ind, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5 hover:border-teal-500/50 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {ind}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Biomarkers & Genomic Targets Table */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif-heading font-bold text-2xl text-[#0D1B2A]">
              Biomarkers &amp; Genes Evaluated in this Panel
            </h2>
            <p className="text-sm text-slate-600">
              Processed using high-complexity Next-Generation Sequencing (NGS) in CLIA-certified and CAP-accredited partner laboratories.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-4 w-1/4">Gene Symbol / Name</th>
                  <th className="p-4 w-2/5">Clinical Significance</th>
                  <th className="p-4 w-1/3">Actionable Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {program.genesAnalyzed.map((gene) => (
                  <tr key={gene.symbol} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-bold text-[#0D1B2A]">
                      <span className="font-mono text-[#0D9488] block">{gene.symbol}</span>
                      <span className="text-slate-500 font-normal text-xs">{gene.name}</span>
                    </td>
                    <td className="p-4 text-slate-600 leading-relaxed">
                      {gene.clinicalSignificance}
                    </td>
                    <td className="p-4 text-slate-800 font-medium leading-relaxed bg-teal-50/20">
                      {gene.actionableImpact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Sample Report & Medicare Coverage Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif-heading font-bold text-2xl text-[#0D1B2A]">
              Sample Report &amp; Diagnostic Action Plan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every patient receives an easy-to-understand diagnostic summary and a detailed clinical report tailored for their primary care doctor.
            </p>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Sample Result Classification
                </span>
                <Badge
                  variant={
                    program.sampleReportSummary.resultStatus.includes('Pathogenic')
                      ? 'rose'
                      : program.sampleReportSummary.resultStatus.includes('Moderate')
                      ? 'amber'
                      : 'emerald'
                  }
                  size="sm"
                >
                  {program.sampleReportSummary.resultStatus}
                </Badge>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-700 block">Identified Finding:</span>
                <p className="text-xs font-medium text-slate-900 bg-[#FDFCF7] p-3 rounded-xl border border-slate-200">
                  {program.sampleReportSummary.keyFinding}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-700 block">Clinician Recommendation:</span>
                <p className="text-xs text-slate-700 bg-teal-50/50 p-3 rounded-xl border border-teal-200/60 leading-relaxed">
                  {program.sampleReportSummary.clinicalRecommendation}
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Clinical Care & Laboratory Standards */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif-heading font-bold text-2xl text-[#0D1B2A]">
              Clinical Care &amp; Laboratory Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              How our licensed physician network and accredited laboratories deliver personalized diagnostic clarity to your doorstep:
            </p>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-4">
              <div className="flex items-center gap-2 text-[#0D9488] font-bold text-sm">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                <span>100% Physician-Ordered &amp; CLIA Lab Certified</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {program.medicareCoverageCriteria}
              </p>

              <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                <Stethoscope className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>
                  Our network of state-licensed physicians reviews your clinical indications to confirm medical necessity and coordinate care before any kit is mailed.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0D1B2A] text-white text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-2">
            <Badge variant="emerald" size="sm" dot>
              Physician-Ordered Clinical Screening
            </Badge>
            <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl text-white">
              Ready to Check Your Eligibility for {program.name}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Takes under 2 minutes • Painless at-home cheek swab • 100% Physician Reviewed
            </p>
          </div>

          <Button
            href={`/eligibility-checker?program=${program.slug}`}
            size="lg"
            variant="primary"
            className="shadow-md shadow-teal-700/30 text-xs sm:text-sm font-semibold rounded-full"
          >
            Start 2-Minute Pre-Qualification &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
}
