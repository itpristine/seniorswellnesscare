'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ShieldCheck,
  Dna,
  Sparkles,
  Activity,
} from 'lucide-react';
import { DIAGNOSTIC_PROGRAMS } from '@/lib/constants/programsData';
import { cn } from '@/lib/utils/cn';

export function SecondaryNav() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Show this secondary navbar only within the Immunodeficiency / Genomics section
  const isImmunodeficiencySection =
    pathname.startsWith('/immunodeficiency') ||
    pathname.startsWith('/programs') ||
    pathname.startsWith('/track-kit') ||
    pathname === '/resources/sample-reports';

  if (!isImmunodeficiencySection) {
    return null;
  }

  return (
    <div className="bg-[#F7F4E7]/90 border-b border-[#EAE5D8] backdrop-blur-md px-4 sm:px-6 md:px-8 py-2 z-30 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Section Identifier */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center gap-1.5 text-xs font-bold text-[#0D1B2A] uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
            <Dna className="w-3.5 h-3.5 text-[#0D9488]" />
            <span className="hidden sm:inline">Section:</span> Immunodeficiency &amp; Genomics
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs font-medium text-slate-800">
          {/* Dropdown: Tests & Diagnostics */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('tests')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/programs"
              className={cn(
                'flex items-center gap-1 py-1 hover:text-[#0D9488] transition-colors font-medium',
                pathname.startsWith('/programs') ? 'text-[#0D9488] font-bold' : 'text-slate-800'
              )}
            >
              <span>Tests &amp; Diagnostics</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            {activeDropdown === 'tests' && (
              <div className="absolute top-full left-0 mt-1 w-[640px] bg-white rounded-3xl shadow-xl border border-slate-200/90 p-5 grid grid-cols-2 gap-2.5 animate-fade-in z-50">
                <div className="col-span-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">
                      9 Physician-Ordered Diagnostic Panels
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      At-home 5-minute buccal swab collection kits processed in CLIA-certified labs.
                    </p>
                  </div>
                  <Link
                    href="/programs"
                    className="text-xs font-bold text-[#0D9488] hover:underline whitespace-nowrap"
                  >
                    All 9 Panels &rarr;
                  </Link>
                </div>

                {DIAGNOSTIC_PROGRAMS.slice(0, 6).map((prog) => (
                  <Link
                    key={prog.slug}
                    href={`/programs/${prog.slug}`}
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-[#FDFCF7] border border-transparent hover:border-slate-200/80 transition-all group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                      <Activity className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-semibold text-xs text-[#0D1B2A] group-hover:text-[#0D9488] block">
                        {prog.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {prog.clinicalCode} • {prog.genesAnalyzed.length} Genes
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Link: Insurance & Eligibility */}
          <Link
            href="/medicare-eligibility"
            className={cn(
              'flex items-center gap-1.5 py-1 hover:text-[#0D9488] transition-colors',
              pathname === '/medicare-eligibility' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
            )}
          >
            <span>Insurance &amp; Eligibility</span>
            <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <Sparkles className="w-2.5 h-2.5 text-amber-600" />
              $0 Copay Check
            </span>
          </Link>

          {/* Link: For Patients */}
          <Link
            href="/how-it-works"
            className={cn(
              'py-1 hover:text-[#0D9488] transition-colors',
              pathname === '/how-it-works' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
            )}
          >
            For Patients
          </Link>

          {/* Link: Sample Reports */}
          <Link
            href="/resources/sample-reports"
            className={cn(
              'py-1 hover:text-[#0D9488] transition-colors',
              pathname === '/resources/sample-reports' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
            )}
          >
            Sample Reports
          </Link>

          {/* Link: Track Kit */}
          <Link
            href="/track-kit"
            className={cn(
              'py-1 hover:text-[#0D9488] transition-colors',
              pathname === '/track-kit' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
            )}
          >
            Track Kit
          </Link>

          {/* Link: FAQs */}
          <Link
            href="/resources/faq"
            className={cn(
              'py-1 hover:text-[#0D9488] transition-colors',
              pathname === '/resources/faq' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
            )}
          >
            FAQs
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="/eligibility-checker"
            className="bg-[#0D9488] hover:bg-[#0F766E] text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full transition-all shadow-xs flex items-center gap-1 whitespace-nowrap"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
            <span>Check $0 Eligibility</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
