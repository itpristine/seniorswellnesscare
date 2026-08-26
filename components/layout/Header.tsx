'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  ShieldCheck,
  Dna,
  Search,
  Sparkles,
  X,
  Activity,
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';
import { DIAGNOSTIC_PROGRAMS } from '@/lib/constants/programsData';
import { MobileNav } from '@/components/layout/MobileNav';
import { TopAlertBanner } from '@/components/layout/TopAlertBanner';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredPanels = DIAGNOSTIC_PROGRAMS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clinicalCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.genesAnalyzed.some((g) => g.symbol.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <TopAlertBanner onOpenSearch={() => setSearchModalOpen(true)} />

      <header className="sticky top-0 z-40 w-full transition-all duration-200">
        <div className="bg-[#FDFCF7]/95 backdrop-blur-md border-b border-[#EAE5D8] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-between shadow-xs relative z-50">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0D1B2A] to-[#1A2E40] text-emerald-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-emerald-500/30">
              <Dna className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading font-bold text-lg sm:text-xl text-[#0D1B2A] tracking-tight flex items-center gap-1">
                Aegis<span className="text-[#0D9488] font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider">Genomics</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wide -mt-1 hidden xs:block">
                Genomic Medicine &amp; Diagnostics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-800">
            {/* Dropdown: Tests & Diagnostics */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('tests')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/programs"
                className={cn(
                  'flex items-center gap-1 py-2 hover:text-[#0D9488] transition-colors font-medium',
                  pathname.startsWith('/programs') ? 'text-[#0D9488] font-bold' : 'text-slate-800'
                )}
              >
                <span>Tests &amp; Diagnostics</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {activeDropdown === 'tests' && (
                <div className="absolute top-full left-0 mt-1 w-[680px] bg-white rounded-3xl shadow-xl border border-slate-200/90 p-5 grid grid-cols-2 gap-2.5 animate-fade-in z-50">
                  <div className="col-span-2 pb-2.5 border-b border-slate-100 flex items-center justify-between">
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
                'flex items-center gap-1.5 py-2 hover:text-[#0D9488] transition-colors',
                pathname === '/medicare-eligibility' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
              )}
            >
              <span>Insurance &amp; Eligibility</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                $0 Copay Check
              </span>
            </Link>

            {/* Link: For Patients */}
            <Link
              href="/how-it-works"
              className={cn(
                'py-2 hover:text-[#0D9488] transition-colors',
                pathname === '/how-it-works' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
              )}
            >
              For Patients
            </Link>

            {/* Link: For Providers */}
            <Link
              href="/providers"
              className={cn(
                'py-2 hover:text-[#0D9488] transition-colors',
                pathname.startsWith('/providers') ? 'text-[#0D9488] font-bold' : 'text-slate-800'
              )}
            >
              For Providers
            </Link>

            {/* Link: Sample Reports */}
            <Link
              href="/resources/sample-reports"
              className={cn(
                'py-2 hover:text-[#0D9488] transition-colors',
                pathname === '/resources/sample-reports' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
              )}
            >
              Sample Reports
            </Link>

            {/* Link: FAQs */}
            <Link
              href="/resources/faq"
              className={cn(
                'py-2 hover:text-[#0D9488] transition-colors',
                pathname === '/resources/faq' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
              )}
            >
              FAQs
            </Link>
          </nav>

          {/* Action CTA — single unified form */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/eligibility-checker"
              className="bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-xs hover:shadow-md flex items-center gap-1.5 whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-200" />
              <span>Check My Eligibility</span>
            </Link>
          </div>

          {/* Mobile menu and search buttons */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 text-slate-700 hover:text-[#0D9488] hover:bg-slate-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#0D1B2A] rounded-xl hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSearchModalOpen(false)}
          />

          <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-5 h-5 text-[#0D9488]" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search by gene (e.g. BRCA1, CYP2D6) or disease panel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm font-medium text-slate-900 focus:outline-none placeholder-slate-400"
                />
              </div>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-72 overflow-y-auto space-y-2">
              {filteredPanels.length > 0 ? (
                filteredPanels.map((prog) => (
                  <Link
                    key={prog.slug}
                    href={`/programs/${prog.slug}`}
                    onClick={() => setSearchModalOpen(false)}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FDFCF7] border border-transparent hover:border-slate-200 transition-all group"
                  >
                    <div>
                      <span className="font-serif-heading font-bold text-sm text-[#0D1B2A] group-hover:text-[#0D9488] block">
                        {prog.name}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                        <span className="font-mono font-bold text-[#0D9488]">{prog.clinicalCode}</span>
                        <span>•</span>
                        <span>{prog.genesAnalyzed.slice(0, 4).map((g) => g.symbol).join(', ')}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0D9488] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))
              ) : (
                <div className="py-8 text-center text-xs text-slate-500">
                  No diagnostic panels matching &quot;{searchQuery}&quot;
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Press <kbd className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-600">ESC</kbd> to close</span>
              <span>All 9 Panels Covered by Medicare Part B</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
