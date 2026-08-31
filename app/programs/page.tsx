import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { DIAGNOSTIC_PROGRAMS } from '@/lib/constants/programsData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  ShieldAlert,
  Pill,
  Brain,
  Activity,
  HeartPulse,
  Wind,
  Flame,
  Layers,
  Eye,
  ArrowRight,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Genetic Testing Programs & Clinical Panels | Seniors Wellness Care',
  description:
    'Explore 9 physician-ordered genetic testing panels for seniors: Hereditary Cancer (CGx), Pharmacogenomics (PGx), Cardiovascular, and Neurocognitive panels covered through insurance.',
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldAlert':
      return <ShieldAlert className="w-5 h-5 text-rose-500" />;
    case 'Pill':
      return <Pill className="w-5 h-5 text-[#0D9488]" />;
    case 'Brain':
      return <Brain className="w-5 h-5 text-purple-500" />;
    case 'Activity':
      return <Activity className="w-5 h-5 text-[#0D9488]" />;
    case 'HeartPulse':
      return <HeartPulse className="w-5 h-5 text-red-500" />;
    case 'Wind':
      return <Wind className="w-5 h-5 text-sky-500" />;
    case 'Flame':
      return <Flame className="w-5 h-5 text-amber-500" />;
    case 'Layers':
      return <Layers className="w-5 h-5 text-indigo-500" />;
    case 'Eye':
      return <Eye className="w-5 h-5 text-emerald-500" />;
    default:
      return <Activity className="w-5 h-5 text-[#0D9488]" />;
  }
};

export default function ProgramsHubPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            Genetic Diagnostic Catalog
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight">
            Our 9 Physician-Ordered Genetic Testing Panels
          </h1>
          <p className="font-sans-body text-base sm:text-lg text-slate-600 leading-relaxed">
            All tests are evaluated by board-certified physicians, collected with a painless 5-minute buccal swab, and processed by federally certified CLIA/CAP laboratories.
          </p>
        </div>

        {/* 9 Programs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIAGNOSTIC_PROGRAMS.map((program) => (
            <Card
              key={program.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-clinical hover:shadow-xl hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    {getIcon(program.iconName)}
                  </div>
                  <Badge variant="emerald" size="sm">
                    CLIA Certified
                  </Badge>
                </div>

                <div>
                  <span className="text-[11px] font-mono font-bold text-[#0D9488] tracking-wider uppercase block">
                    {program.clinicalCode}
                  </span>
                  <h2 className="font-serif-heading font-bold text-xl text-[#0D1B2A] group-hover:text-[#0D9488] transition-colors mt-0.5">
                    {program.name}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {program.shortDescription}
                </p>

                {/* Genes snippet */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Evaluated Biomarkers:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {program.genesAnalyzed.slice(0, 3).map((g) => (
                      <span
                        key={g.symbol}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#FDFCF7] text-slate-700 border border-slate-200/70"
                      >
                        {g.symbol}
                      </span>
                    ))}
                    {program.genesAnalyzed.length > 3 && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-teal-50 text-[#0D9488]">
                        +{program.genesAnalyzed.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Turnaround: <strong className="text-slate-700">{program.sampleTurnaround}</strong></span>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/programs/${program.slug}`}
                  className="text-xs font-semibold text-slate-700 hover:text-[#0D9488] transition-colors flex items-center gap-1"
                >
                  <span>Explore Science</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/eligibility-checker?program=${program.slug}`}
                  className="text-xs font-semibold bg-[#0D9488] text-white px-3.5 py-1.5 rounded-full hover:bg-[#0F766E] transition-all shadow-xs"
                >
                  Check Eligibility
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-3xl bg-[#F7F4E7]/90 border border-[#EAE5D8] text-[#0D1B2A] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A]">
              Need Help Finding the Right Screening Panel?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Our 2-minute pre-qualification wizard evaluates your personal health history to match recommended panels automatically.
            </p>
          </div>
          <Button
            href="/eligibility-checker"
            size="lg"
            variant="primary"
            className="shrink-0 text-xs sm:text-sm font-semibold rounded-full"
          >
            Start Pre-Qualification &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
}
