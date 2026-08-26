'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ShieldCheck,
  Dna,
  HeartPulse,
  Sparkles,
  Activity,
  Radio,
  Home,
  Watch,
} from 'lucide-react';
import { DIAGNOSTIC_PROGRAMS } from '@/lib/constants/programsData';
import { DME_PRODUCTS } from '@/lib/constants/dmeData';
import { MEDICAL_ALERT_SYSTEMS } from '@/lib/constants/medicalAlertData';
import { cn } from '@/lib/utils/cn';

export function SecondaryNav() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Immunodeficiency / Genomics section
  const isImmunodeficiencySection =
    pathname.startsWith('/immunodeficiency') ||
    pathname.startsWith('/programs') ||
    pathname.startsWith('/track-kit') ||
    pathname === '/resources/sample-reports';

  // DME section
  const isDmeSection = pathname.startsWith('/dme');

  // Medical Alert section
  const isMedicalAlertSection = pathname.startsWith('/medical-alert');

  if (!isImmunodeficiencySection && !isDmeSection && !isMedicalAlertSection) {
    return null;
  }

  // ── MEDICAL ALERT SECONDARY NAVBAR ──
  if (isMedicalAlertSection) {
    return (
      <div className="w-full bg-[#F7F4E7]/95 border-b border-[#EAE5D8] backdrop-blur-md px-4 sm:px-6 md:px-8 py-2.5 z-40 transition-all sticky top-[64px] sm:top-[72px] shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Section Identifier */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/medical-alert"
              className="flex items-center gap-1.5 text-xs font-bold text-[#0D1B2A] uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-xs hover:border-[#0D9488] transition-colors"
            >
              <Radio className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span className="hidden sm:inline">Section:</span> Medical Alert
            </Link>
          </div>

          {/* Desktop Navigation Links (Suggested: Medical Alert, Home System, Mobile Systems, Smartwatch, How It Works, FAQs, Get a Quote) */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs font-semibold text-slate-800">
            <Link
              href="/medical-alert#what-is-medical-alert"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              Medical Alert
            </Link>

            <Link
              href="/medical-alert#home-system"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              Home System
            </Link>

            <Link
              href="/medical-alert#mobile-systems"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              Mobile Systems
            </Link>

            <Link
              href="/medical-alert#smartwatch"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              Smartwatch
            </Link>

            <Link
              href="/medical-alert#how-it-works"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              How It Works
            </Link>

            <Link
              href="/medical-alert#faq"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              FAQs
            </Link>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/medical-alert/quote"
              className="bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </div>

        {/* Mobile quick scroll anchors */}
        <div className="flex md:hidden items-center gap-2 overflow-x-auto pt-2 pb-0.5 no-scrollbar text-xs font-semibold text-slate-700">
          <Link
            href="/medical-alert#what-is-medical-alert"
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 whitespace-nowrap shadow-xs"
          >
            Medical Alert
          </Link>
          <Link
            href="/medical-alert#home-system"
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 whitespace-nowrap shadow-xs"
          >
            Home System
          </Link>
          <Link
            href="/medical-alert#mobile-systems"
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 whitespace-nowrap shadow-xs"
          >
            Mobile Systems
          </Link>
          <Link
            href="/medical-alert#smartwatch"
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 whitespace-nowrap shadow-xs"
          >
            Smartwatch
          </Link>
          <Link
            href="/medical-alert#how-it-works"
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 whitespace-nowrap shadow-xs"
          >
            How It Works
          </Link>
          <Link
            href="/medical-alert/quote"
            className="px-3 py-1 rounded-full bg-[#0D9488] text-white border border-[#0D9488] whitespace-nowrap shadow-xs font-bold"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    );
  }

  // ── DME SECONDARY NAVBAR ──
  if (isDmeSection) {
    return (
      <div className="w-full bg-[#F7F4E7]/95 border-b border-[#EAE5D8] backdrop-blur-md px-4 sm:px-6 md:px-8 py-2 z-30 transition-all sticky top-[64px] sm:top-[72px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Section Identifier */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1.5 text-xs font-bold text-[#0D1B2A] uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
              <HeartPulse className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden sm:inline">Section:</span> DME &amp; Orthopedic Bracing
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-medium text-slate-800">
            {/* Link: Overview */}
            <a
              href="#what-is-dme"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              What is DME
            </a>

            {/* Dropdown: Orthopedic Braces */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('dme-braces')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href="#products"
                className="flex items-center gap-1 py-1 hover:text-[#0D9488] transition-colors font-medium cursor-pointer"
              >
                <span>DME Braces</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {activeDropdown === 'dme-braces' && (
                <div className="absolute top-full left-0 mt-1 w-[560px] bg-white rounded-3xl shadow-xl border border-slate-200/90 p-5 grid grid-cols-2 gap-2.5 animate-fade-in z-50">
                  <div className="col-span-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">
                        5 Physician-Prescribed Orthopedic Braces
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Covered under Medicare Part B for qualifying medical conditions.
                      </p>
                    </div>
                    <a
                      href="#products"
                      className="text-xs font-bold text-[#0D9488] hover:underline whitespace-nowrap"
                    >
                      View All 5 &rarr;
                    </a>
                  </div>

                  {DME_PRODUCTS.map((prod) => (
                    <a
                      key={prod.id}
                      href={`#${prod.anchorId}`}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-[#FDFCF7] border border-transparent hover:border-slate-200/80 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                        <Activity className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-xs text-[#0D1B2A] group-hover:text-[#0D9488] block">
                          {prod.name}
                        </span>
                        <span className="text-[10px] text-slate-500 line-clamp-1">
                          {prod.badge}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Brace Anchor Links */}
            
            <a
              href="#back-braces"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              Back Braces
            </a>
            

            {/* How It Works */}
            <a
              href="#how-it-works"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              How It Works
            </a>

            {/* Medicare Coverage */}
            <a
              href="#medicare-coverage"
              className="flex items-center gap-1.5 py-1 hover:text-[#0D9488] transition-colors"
            >
              <span>Medicare Coverage</span>
              <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                Coverage Review
              </span>
            </a>

            {/* FAQs */}
            <a
              href="#faq"
              className="py-1 hover:text-[#0D9488] transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="/eligibility-checker"
              className="bg-[#0D9488] hover:bg-[#0F766E] text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full transition-all shadow-xs flex items-center gap-1 whitespace-nowrap"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
              <span>Check Eligibility</span>
            </Link>
          </div>
        </div>

        {/* Mobile quick scroll anchors */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto pt-1.5 pb-0.5 no-scrollbar text-[11px] font-semibold text-slate-700">
          <a href="#what-is-dme" className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 whitespace-nowrap">
            Overview
          </a>
          
          <a href="#back-braces" className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 whitespace-nowrap">
            Back
          </a>
          
          <a href="#how-it-works" className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 whitespace-nowrap">
            How It Works
          </a>
          <a href="#medicare-coverage" className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 whitespace-nowrap text-[#0D9488]">
            Medicare Coverage
          </a>
        </div>
      </div>
    );
  }

  // ── IMMUNODEFICIENCY SECONDARY NAVBAR ──
  return (
    <div className="w-full bg-[#F7F4E7]/90 border-b border-[#EAE5D8] backdrop-blur-md px-4 sm:px-6 md:px-8 py-2 z-30 transition-all sticky top-[64px] sm:top-[72px]">
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
              Coverage Review
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
            <span>Check Eligibility</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
