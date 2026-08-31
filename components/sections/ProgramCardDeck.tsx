'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
import { DIAGNOSTIC_PROGRAMS } from '@/lib/constants/programsData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

export function ProgramCardDeck() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 9 Panels' },
    { id: 'oncology', label: 'Cancer (CGx)' },
    { id: 'pharmacology', label: 'Medications (PGx)' },
    { id: 'neurology', label: 'Dementia & Brain' },
    { id: 'immunology', label: 'Immune System' },
    { id: 'cardiovascular', label: 'Heart & Cardio' },
    { id: 'pulmonary', label: 'Lungs & Alpha-1' },
    { id: 'metabolic', label: 'Diabetes & MODY' },
  ];

  const getProgramIcon = (iconName: string) => {
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

  const filteredPrograms =
    selectedCategory === 'all'
      ? DIAGNOSTIC_PROGRAMS
      : DIAGNOSTIC_PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            Genetic Testing Panels
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Comprehensive Genetic Testing &amp; Sequencing Panels
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600">
            Each genetic testing panel is reviewed and ordered by a licensed physician, processed by CLIA/CAP certified laboratories, and covered by insurance when medically appropriate.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer',
                selectedCategory === cat.id
                  ? 'bg-[#0D1B2A] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#0D1B2A]'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((program) => (
            <Card
              key={program.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-clinical hover:shadow-xl hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Bar */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getProgramIcon(program.iconName)}
                  </div>
                  <Badge variant="emerald" size="sm">
                    CLIA Certified
                  </Badge>
                </div>

                {/* Title & Code */}
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#0D9488] tracking-wider uppercase block">
                    {program.clinicalCode}
                  </span>
                  <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A] group-hover:text-[#0D9488] transition-colors mt-0.5">
                    {program.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {program.shortDescription}
                </p>

                {/* Key Biomarkers tags */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Key Biomarkers &amp; Genes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {program.genesAnalyzed.slice(0, 3).map((gene) => (
                      <span
                        key={gene.symbol}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#FDFCF7] text-slate-700 border border-slate-200/70"
                      >
                        {gene.symbol}
                      </span>
                    ))}
                    {program.genesAnalyzed.length > 3 && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-teal-50 text-[#0D9488]">
                        +{program.genesAnalyzed.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Turnaround Badge */}
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Turnaround: <strong className="text-slate-700">{program.sampleTurnaround}</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-3">
                <Link
                  href={`/programs/${program.slug}`}
                  className="flex-1 text-center py-2.5 px-3 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0D1B2A] transition-colors"
                >
                  Clinical Details &rarr;
                </Link>

                <Link
                  href={`/eligibility-checker?program=${program.slug}`}
                  className="py-2.5 px-4 rounded-full bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold transition-all shadow-xs flex items-center justify-center shrink-0"
                >
                  Review Eligibility
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#F7F4E7]/80 border border-[#EAE5D8] text-[#0D1B2A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A]">
              Not sure which diagnostic panel fits your health profile?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Our 2-minute pre-qualification wizard evaluates your personal health history to match recommended panels automatically.
            </p>
          </div>
          <Button
            href="/eligibility-checker"
            size="md"
            variant="primary"
            className="shrink-0 text-xs sm:text-sm font-semibold rounded-full"
          >
            Start Pre-Qualification &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
